# Productionization Plan

## Hosting Architecture

The app is a React SPA today with a thin backend for AI calls. At production scale, the recommended stack is:

**Frontend** — Static assets deployed to a CDN (Cloudflare Pages or Vercel). No server needed for the sky map, constellation overlays, or UI; all state is client-side. This keeps latency low for the visually rich, animation-heavy interface.

**API layer** — A lightweight Node/Edge function layer (Vercel Edge Functions or AWS Lambda@Edge) proxies requests to the Claude API. This keeps the API key off the client and enables rate limiting per session. Edge deployment co-locates compute near users, which matters for perceived AI response latency.

**Session state** — Conversation history lives in the browser (localStorage or sessionStorage) for the MVP. At scale, a Redis instance (Upstash serverless or AWS ElastiCache) stores session state server-side so long conversations don't inflate token counts by re-sending full history on every turn. Session IDs are tied to anonymous browser tokens — no login required.

**Tradeoff:** Serverless edge functions are cheap and auto-scale but add cold-start latency on first message (~100–300ms). A persistent Express container (Railway, Fly.io) eliminates cold starts but costs more at low traffic. Given that this is an async, story-driven tutor (not a real-time chat), cold starts are acceptable.

---

## Model Choice at Scale

**Current default: `claude-sonnet-4-6`** — the right balance of reasoning quality and cost for a tutoring application where responses must be accurate, culturally nuanced, and age-appropriate.

At scale, a two-tier approach works best:

- **Short clarification turns** (user says "tell me more", single-word responses): route to `claude-haiku-4-5`, which is 5–10× cheaper and fast enough that response latency is imperceptible.
- **Constellation deep-dives and mythology explanations**: stay on Sonnet 4.6 for richer, layered storytelling.

Routing logic lives in the API layer and is based on estimated output token count from the prompt structure. Prompt caching (Anthropic's cache\_control feature) should be applied to the fixed system prompt (~2,000 tokens), which is resent on every turn. At volume, this alone reduces input token costs by ~70%.

**Tradeoff:** Haiku is cheaper but occasionally flattens cultural nuance or shortens mythology. Given the educational mission, accuracy outweighs cost — default to Sonnet and only downgrade on provably simple turns.

---

## Data Privacy

This application targets children, which triggers COPPA (under-13) obligations in the US and similar rules globally.

- **No PII collected.** No account creation, no names, no email. Sessions are keyed to an anonymous UUID in localStorage that expires after 30 days.
- **Conversation logs** should not be retained server-side beyond the session window unless explicitly needed for abuse monitoring. If retained for model improvement, strip before storage and apply a 30-day TTL.
- **Anthropic's data usage policy** covers inputs sent to the API. Using the API under a commercial agreement (not the free tier) opts out of training data use by default — this must be confirmed in the API agreement before launch.
- **Prompt injection** is a live risk: students are free-text inputs. The system prompt includes explicit persona and topic constraints, and the API layer should validate that responses don't veer into non-astronomy domains before forwarding to the client.

---

## Cost Model

Rough estimate at steady-state usage (1,000 active student sessions/month, avg 20 turns each):

| Component | Est. Monthly Cost |
|---|---|
| Claude Sonnet 4.6 (80% turns) | ~$18 |
| Claude Haiku 4.5 (20% turns) | ~$0.50 |
| Prompt cache savings (~70% input reduction) | −$8 |
| Vercel/CDN + Edge Functions | ~$5 |
| Redis (Upstash) | ~$0–3 |
| **Total** | **~$18–20/mo** |

At 10,000 sessions/month the model cost scales linearly (~$150–180); infrastructure cost barely moves (serverless). This makes the AI API the dominant cost driver — prompt caching and Haiku routing are the highest-leverage optimizations.

---

## Failure Modes

| Failure | Impact | Mitigation |
|---|---|---|
| API timeout / 529 overload | Student sees spinner, loses engagement | Exponential retry (max 3×); fallback static response ("The stars are quiet right now, try again!") |
| Model hallucinates a myth | Misinformation to a child | System prompt cites specific cultural sources; low-temperature setting (0.5) reduces drift; optional human review queue for flagged sessions |
| Prompt injection ("ignore previous instructions") | Off-topic or unsafe output | Output validation layer checks for astronomy relevance before forwarding; Anthropic's built-in safety layer is a secondary backstop |
| Session state loss (localStorage cleared) | Conversation resets | Acceptable for MVP; at scale, server-side sessions with anonymous token recovery |
| CDN cache stale after constellation data update | Users see old overlays | Short TTL (5 min) on constellation JSON assets; long TTL on hashed JS/CSS bundles |

---

## Priority Order with a Real Budget

1. **Prompt caching** — immediate 60–70% cost reduction, zero UX change, 1 day of engineering.
2. **Server-side session state (Redis)** — prevents context window bloat as conversations grow long, directly improves response quality.
3. **Output validation layer** — critical before any public launch targeting minors; a simple keyword + off-topic classifier costs almost nothing.
4. **Haiku routing** — meaningful cost reduction once traffic grows, low risk if bounded to short turns.
5. **Persistent user progress** (optional, longer-term) — anonymous tokens with optional "save my progress" PIN would enable multi-session learning journeys without collecting PII.
