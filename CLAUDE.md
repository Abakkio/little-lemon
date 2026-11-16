# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Little Lemon restaurant site: the capstone project of the Meta React course on Coursera. Vite + React 19, plain JavaScript (no TypeScript), plain CSS.

The sibling folders `../my-app` and `../little-lemon` are untouched Create React App scaffolds, not this project. All real work happens here in `lastapp`.

## Working with the user

- The user is a student and writes the code themselves. Explain and give hints; do not edit their source files unless they explicitly ask.
- Reply in Spanish, in plain words, and keep answers short (about 3 lines; say so if a topic needs more).
- When course material and web standards disagree (e.g. Coursera teaches `<meta name="og:...">` instead of `property`), follow the course, since the project is graded against it.

## Commands

```bash
npm run dev      # Vite dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # oxlint (config in .oxlintrc.json)
```

There is no test runner configured.

## Architecture

- `src/main.jsx` mounts `<App />` inside `<BrowserRouter>`. `react-router-dom` is installed but no routes are defined yet: `Nav.jsx` uses plain `<a href>` links and `Main.jsx` always renders `HomePage`.
- `App.jsx` is the page shell: `Header` (logo + `Nav`), `Main`, `Footer`.
- `HomePage.jsx` composes the home sections in order: `Hero`, `Specials`, `Testimonials`. `Chicago.jsx` is the About page: a separate page for the `/about` route (the "About" nav link), never a section of the home page.
- `Card` and `TestimonialCard` are presentational components fed by props; their data is hardcoded in `Specials.jsx` and `Testimonials.jsx`.
- Images are imported from `src/assets/` inside the components; `public/` only holds files referenced by absolute URL from `index.html`.

## Styling conventions

- All component styles live in one file, `src/App.css`, using global class names (no CSS modules). `src/index.css` only holds the font import and base element styles.
- Layout pattern: the `<section>` carries the background colour and an inner `<div className="container">` (max-width 860px, centred) carries the content.
- CSS Grid for equal-column card grids (`.specials-cards`, `.testimonials-cards`); Flexbox inside cards and for header, hero and footer.
- Responsive rules go in the single `@media (max-width: 768px)` block at the end of `App.css`. The mobile menu is CSS-only: a hidden checkbox `.menu-toggle` plus a `label.menu-button`.
- Brand palette: `#495E57` (green), `#F4CE14` (yellow), `#EE9972`, `#FBDABB`, `#EDEFEE` (light grey), `#333333` (text). Fonts: Markazi Text for headings, Karla for everything else.
