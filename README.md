# RYSAV Website

A modern, Vedic-minimal website built with **Next.js 14+**, **TypeScript**, and **Tailwind CSS**.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ installed
- npm (comes with Node.js)

### Installation

```bash
cd rysav-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
rysav-website/
├── src/
│   ├── app/
│   │   ├── globals.css        # Design tokens, Tailwind, mandala watermark
│   │   ├── layout.tsx         # Root layout with Google Fonts
│   │   └── page.tsx           # Homepage
│   └── components/
│       ├── Navbar.tsx          # Sticky nav with accessible dropdowns
│       ├── Hero.tsx            # Hero section with landscape + temple
│       ├── MythbustersCarousel.tsx  # Scrolling mythbuster cards
│       ├── KnowledgeCards.tsx  # 4-card knowledge grid
│       ├── ServicesList.tsx   # Service rows
│       ├── CommunityCTA.tsx   # Newsletter CTA
│       └── Footer.tsx         # Site footer
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

## Design Tokens

| Token       | Value                          |
| ----------- | ------------------------------ |
| `--bg`      | `#FAF7F2` (warm ivory)         |
| `--surface` | `#FFFDF9`                      |
| `--text`    | `#2B2B2B`                      |
| `--gold`    | `#C89B3C` (muted gold)        |
| `--olive`   | `#4E5B3A` (deep olive)        |
| `--shadow`  | `0 10px 30px rgba(0,0,0,0.08)` |

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- `next/font/google` (Playfair Display + Inter)
- No external UI libraries
