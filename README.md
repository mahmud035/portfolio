# Portfolio

My personal portfolio — a single-page site that says who I am, what I've
shipped, and how to reach me. It's a static client-only app: no backend, no
forms, no data fetching. Every bit of content is typed data in `src/data/`, so
the app is really just a well-organized way to render that data.

## Built with

- **React 19** + **TypeScript** (strict)
- **Vite** for dev/build
- **Tailwind CSS v4** — CSS-first setup (`@import "tailwindcss"`), semantic tokens
- **Motion** (`motion/react`) for restrained scroll and hover animation
- **lucide-react** for icons
- **Inter** (body) and **Sora** (headings), self-hosted via `@fontsource-variable`

## Running it

```bash
npm install
npm run dev       # dev server
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # serve the production build locally
npm run lint      # eslint
npm run format    # prettier --write
```

Node 20+ recommended.

## Layout

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, ThemeToggle, TalkModal
│   ├── sections/   # Hero, About, Skills, Projects — presentational only
│   └── ui/         # Button, Card, Badge, Avatar, Modal, IconLink, ...
├── data/           # profile.ts, projects.ts, skills.ts — the single source of truth
├── hooks/          # useTheme, useDelayedModal
├── providers/      # ThemeProvider
├── utils/
├── App.tsx
├── main.tsx
└── index.css       # Tailwind import + theme tokens
```

The rule I stuck to: sections read from `data/` and never hardcode copy. The
typed shapes in `src/data/` are the contract — get a field wrong and it's a
TypeScript error, not a broken page at runtime.

## A few things worth knowing

- **Theme** — dark by default, with a toggle. The choice is saved to
  `localStorage` and falls back to the OS preference on a first visit. An inline
  script in `index.html` sets the theme before React mounts, so there's no
  flash of the wrong theme on load.
- **Content** — edit `src/data/*` to change anything. The résumé button points
  at a hosted link (`cvUrl` in `profile.ts`) that opens in a new tab, so the CV
  can be updated in place without redeploying.
- **Contact** — no form. Reach-me links in the footer, plus a one-time
  "want to talk?" modal that appears once per session (LinkedIn / email).
- **Accessibility** — semantic landmarks, keyboard-navigable nav and modal,
  visible focus states, and everything honors `prefers-reduced-motion`.

## Assets

Everything the app references lives in `public/`: the headshot (`mahmud.png`,
falls back to an "MH" monogram if missing), the favicon set + web manifest, and
the social share image (`og-image.png`, 1200×630).

## Deploying

It's a plain static build — `npm run build` outputs `dist/`, host it anywhere.
I deploy on Vercel (framework preset Vite, output `dist/`). Before pointing a
real domain at it, replace the `https://mahamudulhasan.vercel.app/` placeholders in
`index.html` (canonical + Open Graph/Twitter URLs).
