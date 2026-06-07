# Engler Bodenbeschichtung Website

## Project Overview

This is a German-language, single-page-application marketing website for **Engler Bodenbeschichtung**, a floor-coating business based in Breisach-Gündlingen, Germany (owner: Birgit Engler). The site presents five service offerings (balcony renovation, garage coating, hygienic floors, sales-trailer coating, stair coating), a before/after reference gallery, and a contact form backed by Web3Forms. The project was originally scaffolded in Google AI Studio.

**Language**: German (all user-facing copy and SEO metadata)  
**Primary Market**: Breisach and surrounding Freiburg region  
**Live URL**: https://engler-boden.de  
**Package name**: `engler-beschichtungs--und-verfugungstechnik`  
**Module system**: ES modules (`"type": "module"` in `package.json`)

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | ^19.2.4 | UI library |
| React DOM | ^19.2.4 | DOM rendering (`ReactDOM.createRoot`) |
| React Router DOM | ^7.13.0 | Client-side routing (`HashRouter`) |
| TypeScript | ~5.8.2 | Type safety |
| Vite | ^6.2.0 | Build tool and dev server |
| Tailwind CSS | CDN | Utility-first styling (loaded from `https://cdn.tailwindcss.com` in `index.html`) |
| Web3Forms | — | Contact form backend |

Tailwind CSS is loaded at runtime from the CDN; `tailwind.config.js` exists for Tailwind CLI / IntelliSense but is **not** consumed by the build.

---

## Project Structure

```
├── components/           # Reusable React components
│   ├── Layout.tsx       # Page wrapper: Navigation + Footer + <main> landmark
│   ├── Navigation.tsx   # Fixed header with mobile hamburger menu
│   ├── Footer.tsx       # Site footer with contact info and legal links
│   └── CookieBanner.tsx # GDPR cookie-consent banner (localStorage)
├── pages/               # Route-level page components
│   ├── Home.tsx         # Hero, stats, intro, featured-services grid
│   ├── Services.tsx     # Detailed service offerings with alternating layout
│   ├── References.tsx   # Before/after gallery (hard-coded project pairs)
│   ├── Contact.tsx      # Contact form and company contact details
│   └── Legal.tsx        # Impressum and Datenschutz
├── public/              # Static assets served at root path
│   ├── *.webp           # Service and gallery images
│   ├── newtreppe.jpeg   # Hero image (also used for stair service)
│   ├── fonts/           # Self-hosted Inter subsets (400/600/700/800 woff2)
│   ├── favicon.svg      # SVG favicon
│   ├── robots.txt       # Crawler rules
│   └── sitemap.xml      # SEO sitemap (contains hash-based paths)
├── content.ts           # Centralised site content (German text, metadata)
├── types.ts             # TypeScript interfaces for the `SiteContent` shape
├── App.tsx              # Root component: HashRouter, routes, 404 page
├── index.tsx            # Application entry point (createRoot + StrictMode)
├── index.html           # HTML template, Tailwind CDN, Inter @font-face, importmap
└── Configuration files:
    ├── vite.config.ts   # Vite config (port 9999, path alias, env vars)
    ├── tsconfig.json    # TypeScript config (ES2022, react-jsx, @/* alias)
    ├── tailwind.config.js # Content globs and custom red colours
    └── netlify.toml     # Netlify build/redirect/header settings
```

---

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:9999, host 0.0.0.0)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

> **No test suite** is configured. `package.json` contains no test scripts or testing dependencies. Manual verification is required.

---

## Runtime Architecture

### Routing
`HashRouter` from `react-router-dom` is used so the app works on static hosts without server-side rewrites.

| Route | Path | Component |
|-------|------|-----------|
| Home | `/` | `Home.tsx` |
| Services | `/leistungen` | `Services.tsx` |
| References | `/referenzen` | `References.tsx` |
| Contact | `/kontakt` | `Contact.tsx` |
| Legal | `/impressum` | `Legal.tsx` |
| 404 | `*` | Inline `NotFound` in `App.tsx` |

### State Management
No external state library. All state is local `useState`:
- **Navigation**: mobile menu open/closed
- **Contact form**: field values + submission status (`idle` | `loading` | `success` | `error`)
- **CookieBanner**: visibility controlled by `localStorage.getItem('cookie-consent')`

### Content Management
All navigation labels, company info, hero text, stats, intro copy, and service data live in `content.ts`. The `types.ts` file enforces the `SiteContent` interface.

**Important**: `pages/References.tsx` defines its before/after project array **locally** (`projects`) and does **not** read from `content.ts`. If you add or remove gallery pairs, edit `References.tsx` directly.

The home hero can now accept either a single `image` string or an `images` string array (displayed side-by-side).

### Importmap
`index.html` contains an `importmap` that maps `react`, `react-dom/`, `react/`, and `react-router-dom` to `https://esm.sh`. During Vite development and production builds these imports are resolved from `node_modules`; the importmap may be used for alternative zero-build deployments but is not required for the standard Vite workflow.

---

## Key Configuration Details

### vite.config.ts
- Dev server port: **9999**
- Host: `0.0.0.0`
- Path alias: `@/` → project root (`__dirname`)
- `define`: exposes `process.env.API_KEY` and `process.env.GEMINI_API_KEY` from the loaded `GEMINI_API_KEY` environment variable

### tsconfig.json
- Target: `ES2022`
- Module: `ESNext`
- JSX: `react-jsx`
- Path alias: `@/*` → `./*`
- `moduleResolution`: `bundler`
- `noEmit`: `true`
- `strict`: `true`
- `types`: `["node"]`
- `experimentalDecorators`: `true`, `useDefineForClassFields`: `false`

### tailwind.config.js
- Content globs: `./*.{tsx,html,js,ts}`, `./components/**/*.{tsx,ts}`, `./pages/**/*.{tsx,ts}`
- Custom colours: `red.600` = `#DC2626`, `red.700` = `#B91C1C`
- No plugins

### netlify.toml
- Build command: `npm run build`
- Publish directory: `dist/`
- SPA redirect: `/*` → `/index.html` (status 200)
- Security headers:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Strict-Transport-Security` (HSTS, 2 years)
  - `Content-Security-Policy` (allows Tailwind CDN, Google Fonts, self, Web3Forms)
  - `Permissions-Policy` (sensors/camera/mic restricted)
- Asset caching: 1 year for `/assets/*` (`immutable`)

---

## Styling Conventions

- **Framework**: Tailwind CSS utility classes only. No custom CSS files except the `@font-face` declarations and a minimal `body` rule inside `index.html`.
- **Colour scheme**: Dark theme
  - Background: `bg-neutral-900` / `bg-neutral-950`
  - Body text: `text-neutral-300` / `text-neutral-400`
  - Accent: `text-red-600` / `bg-red-600` / `hover:bg-red-700`
- **Typography**: Inter (self-hosted woff2 subsets for weights 400/600/700/800)
- **Common layout**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Headlines**: `font-black uppercase tracking-tighter`
- **Buttons**: `bg-red-600 hover:bg-red-700` primary; `border-2 border-white` secondary
- **Focus states**: `focus:ring-2 focus:ring-red-600` or `focus:ring-4 focus:ring-red-600/50`
- **Note**: `pages/Legal.tsx` uses `prose` and `prose-invert` classes. The Tailwind Typography plugin is **not** included in `tailwind.config.js`, so these classes will have no effect unless the plugin is added.

---

## Component Conventions

- All components are default-export functional components typed as `React.FC`.
- Components import content from `../content` (relative path from `components/` or `pages/`).
- Page components accept **no props**; they read from the global `content` object.
- Icons are **inline SVGs**; no icon library is used.

---

## Images and Assets

All images are stored in `/public/` and referenced with root-relative paths (e.g., `/garage.webp`).

**Service images:**
- `/balkon.webp` — Balcony renovation
- `/garage.webp` — Garage coating
- `/kueche.webp` — Kitchen / hygienic floors
- `/foodvan.webp` — Sales-trailer coating
- `/treppe.webp` — Stair coating
- `/newtreppe.jpeg` — Reused for stair service

**Hero images:**
- `/heroneu1.jpeg` — Hero left
- `/heroneu2.jpeg` — Hero right

**Reference gallery (before/after):**
- `/a1.webp` – `/b5.webp` (5 project pairs)

**Guidelines for adding images:**
- Prefer `.webp` (the existing `newtreppe.jpeg` is the exception)
- Place in `/public/`
- Provide `width` and `height` attributes where possible
- Use `loading="lazy"` for below-the-fold images; `fetchPriority="high"` for hero

---

## Contact Form

Located in `pages/Contact.tsx`.
- Backend: `https://api.web3forms.com/submit`
- Access key is read from `content.company.contact.web3forms_key`
- Fields: name, email, phone (optional), message
- Honeypot field (`website`) is hidden (`aria-hidden="true"`, `tabIndex={-1}`, `autoComplete="off"`) and aborts submission if filled
- No backend is required; submissions are forwarded to the email configured in Web3Forms

---

## Accessibility Features

- Semantic HTML: `nav`, `main`, `footer`, `section`, `article`
- Skip-to-content link in `Navigation`
- ARIA labels on navigation and cookie banner
- Keyboard focus indicators (`focus:ring` classes)
- Alt text on all images
- Form inputs have associated `<label>` elements
- Mobile menu uses `aria-expanded` and `aria-controls`

---

## Security Considerations

- Content Security Policy is configured in `netlify.toml`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- SSL/TLS enforced via HSTS header
- Form submissions use HTTPS
- No sensitive data stored client-side except cookie-consent string in `localStorage`
- Contact form includes a honeypot field for basic bot mitigation

---

## SEO

- Canonical URL, Open Graph, and Twitter Card meta tags in `index.html`
- `robots.txt` and `sitemap.xml` in `/public/`
- `lang="de"` on `<html>`
- Schema.org `LocalBusiness` JSON-LD structured data in `index.html`

---

## Deployment

**Platform**: Netlify

Build settings (in `netlify.toml`):
- Build command: `npm run build`
- Publish directory: `dist`

**Pre-deployment checklist:**
1. Verify the Web3Forms access key in `content.ts` is valid
2. Confirm all images are in `/public/`
3. Test contact form submission end-to-end
4. Verify cookie banner displays on first visit
5. Check that `GEMINI_API_KEY` is set in environment variables if any feature consumes it

---

## Environment Variables

Create `.env.local` in the project root if needed:

```
GEMINI_API_KEY=your_api_key_here
```

Vite exposes this as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY` at build time via `vite.config.ts`.

---

## Development Guidelines

1. **Adding new pages**: Create component in `pages/`, add route in `App.tsx`, add nav link in `content.ts`.
2. **Adding new services**: Add to `content.ts` under `pages.services` — will auto-appear on Home and Services pages.
3. **Adding reference gallery items**: Edit the hard-coded `projects` array in `pages/References.tsx` and add the corresponding image files to `/public/`.
4. **Styling**: Use Tailwind utility classes; avoid custom CSS files.
5. **Images**: Always provide `width`/`height` attributes for LCP images; prefer `.webp`.
6. **Text content**: Edit `content.ts`, not components directly (except for `References.tsx`).
7. **No tests**: This project does not have a test suite. Manual verification is required.

---

## Troubleshooting

| Issue | Resolution |
|-------|------------|
| Images not loading | Ensure files are in `/public/` and referenced with a root path (`/filename.webp`) |
| Contact form not working | Verify the Web3Forms access key is valid and the endpoint is reachable |
| Routes not working on refresh | Confirm Netlify `netlify.toml` redirect `/*` → `/index.html` is present |
| Environment variables missing | Restart the dev server after editing `.env.local` |
| Tailwind classes not reflecting | Tailwind CDN changes may require a dev-server restart; `tailwind.config.js` edits need a restart as well |
