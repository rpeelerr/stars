# Stars — AI Constellation Tutor

An interactive, AI-powered astronomy tutor that teaches students to identify constellations visible from Southern California in April. The tutor provides multicultural mythology, navigation history, and scientific background through a guided, story-driven conversation.

![Stars App](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![Gemini](https://img.shields.io/badge/Gemini-AI-green)

## What It Does

- Interactive sky map with clickable constellations and stars
- AI guide ("the Guide of the Stars") that adapts to the learner's knowledge level
- Multicultural mythology — Greek, Egyptian, Indigenous, Chinese, Arabic, Polynesian, and more
- Mouse-reactive parallax and constellation art overlays
- Built-in quiz mode to test what you've learned

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- A [Google Gemini API key](https://aistudio.google.com/app/apikey) (free tier available)

## Setup

```bash
# 1. Clone the repository
git clone https://github.com/rpeelerr/stars.git
cd stars

# 2. Install dependencies
npm install

# 3. Configure your API key
cp .env.example .env
# Open .env and replace `your_api_key_here` with your Gemini API key

# 4. Start the app
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## How It Works

`npm run dev` starts two processes concurrently:

| Process | Command | Default URL |
|---|---|---|
| Frontend (Vite + React) | `npm run dev:client` | http://localhost:5173 |
| Backend (Express + AI) | `npm run dev:server` | http://localhost:3000 |

The backend handles all Gemini API calls so the API key stays server-side and never reaches the browser.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, D3
- **Backend**: Express, TypeScript, tsx
- **AI**: Google Gemini via `@google/genai`

## Constellations Covered

Spring sky constellations visible from Southern California (34°N latitude):

Ursa Major, Ursa Minor, Cassiopeia, Orion, Gemini, Canis Major, Canis Minor, Leo, Cancer, Virgo, Boötes, Corvus, Auriga, Perseus, Hydra
