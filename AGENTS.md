# Engler Bodenbeschichtung Website

## Project Overview

This is a German-language React-based marketing website for **Engler Bodenbeschichtung**, a floor coating business based in Breisach, Germany (owner: Birgit Engler). The site showcases services (balcony renovation, garage coating, hygienic flooring, stair coating, sales trailer coating), a before/after reference gallery, and a contact form powered by Web3Forms.

**Language**: German (all user-facing content)  
**Primary Market**: Breisach and surrounding region (Freiburg area)  
**Live URL**: https://engler-boden.de

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.4 | UI library |
| React DOM | 19.2.4 | DOM rendering |
| React Router DOM | 7.13.0 | Client-side routing (HashRouter) |
| TypeScript | ~5.8.2 | Type safety |
| Vite | ^6.2.0 | Build tool and dev server |
| Tailwind CSS | CDN | Utility-first styling |
| Web3Forms | — | Contact form backend |

Tailwind CSS is loaded from `https://cdn.tailwindcss.com` in `index.html`, **not** via npm. The `tailwind.config.js` file exists for Tailwind CLI/IntelliSense but the runtime stylesheet comes from the CDN.

---

## Project Structure

```
├── components/           # Reusable React components
│   ├── Layout.tsx       # Page wrapper: Navigation + Footer + main landmark
│   ├── Navigation.tsx   # Fixed header with mobile hamburger menu
│   ├── Footer.tsx       # Site footer with contact info and legal links
│   └── CookieBanner.tsx # GDPR cookie consent banner (localStorage)
├── pages/               # Route-level page components
│   ├── Home.tsx         # Hero, stats, intro, featured services grid
│   ├── Services.tsx     # Detailed service offerings with alternating layout
│   ├── References.tsx   # Before/after project gallery (hardcoded pairs)
│   ├── Contact.tsx      # Contact form and company contact details
│   └── Legal.tsx        # Impressum and Datenschutz
├── public/              # Static assets served at root path
│   ├── *.webp           # Service and gallery images
│   ├── newtreppe.jpeg   # Hero image
│   ├── fonts/           # Self-hosted Inter font subset (400/600/700/800)
│   ├── favicon.svg      # SVG favicon
│   ├── robots.txt       # Search crawler rules
│   └── sitemap.xml      # SEO sitemap
├── content.ts           # Centralized site content (German text, metadata)
├── types.ts             # TypeScript interfaces for content structure
├── App.tsx              # Root component: HashRouter, routes, 404 page
├── index.tsx            # Application entry point (React 18 createRoot)
├── index.html           # HTML template, Tailwind CDN, Inter font @font-face, importmap
└── Configuration files:
    ├── vite.config.ts   # Vite build config (port 9999, path alias, env vars)
    ├── tsconfig.json    # TypeScript config (ES2022, react-jsx, @/* alias)
    ├── tailwind.config.js # Tailwind content paths and custom red colors
    └── netlify.toml     # Netlify deployment: redirects, headers, CSP
```

---

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:9999, host 0.0.0.0)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

> **Note:** There is **no test suite** configured for this project. `package.json` does not include any test scripts or testing dependencies.

---

## Runtime Architecture

### Routing
Uses `HashRouter` from `react-router-dom` (compatible with static hosting):

| Route | Path | Component |
|-------|------|-----------|
| Home | `/` | Home.tsx |
| Services | `/leistungen` | Services.tsx |
| References | `/referenzen` | References.tsx |
| Contact | `/kontakt` | Contact.tsx |
| Legal | `/impressum` | Legal.tsx |
| 404 | `*` | Inline `NotFound` component in App.tsx |

### State Management
No external state library is used. All component state is managed with React `useState`:
- **Navigation**: mobile menu open/closed
- **Contact form**: form field values, submission status (`idle` | `loading` | `success` | `error`)
- **CookieBanner**: visibility controlled by `localStorage.getItem('cookie-consent')`

### Content Management
All text, navigation items, company info, and service data live in `content.ts`. The `types.ts` file enforces the `SiteContent` structure. To change text or add services, edit `content.ts` — the UI will reflect changes automatically on both Home and Services pages.

---

## Key Configuration Details

### vite.config.ts
- Dev server port: **9999** (not 3000)
- Host: `0.0.0.0`
- Path alias: `@/` maps to project root (`__dirname`)
- Environment variables: loads `.env` files and exposes `GEMINI_API_KEY` as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY`

### tsconfig.json
- Target: `ES2022`
- Module: `ESNext`
- JSX: `react-jsx`
- Path alias: `@/*` → `./*`
- `experimentalDecorators` and `useDefineForClassFields: false` are enabled
- `moduleResolution`: `bundler`
- `noEmit: true` (Vite handles compilation)

### tailwind.config.js
- Content globs: `./*.{tsx,html,js,ts}`, `./components/**/*.{tsx,ts}`, `./pages/**/*.{tsx,ts}`
- Custom colors: `red.600` = `#DC2626`, `red.700` = `#B91C1C`
- No plugins

### netlify.toml
- Build output: `dist/`
- SPA redirect: `/*` → `/index.html` (status 200)
- Security headers include:
  - `X-Frame-Options: DENY`
  - `Strict-Transport-Security` (HSTS)
  - `Content-Security-Policy` (allows Tailwind CDN, Google Fonts, Web3Forms, self)
  - `Permissions-Policy` (restricts sensors/camera/mic/etc.)
- Asset caching: 1 year for `/assets/*` (`immutable`)

---

## Styling Conventions

- **Framework**: Tailwind CSS utility classes only. No custom CSS files except the `@font-face` declarations in `index.html`.
- **Color scheme**: Dark theme
  - Background: `bg-neutral-900` / `bg-neutral-950`
  - Body text: `text-neutral-300` / `text-neutral-400`
  - Accent: `text-red-600` / `bg-red-600`
- **Typography**: Inter font family (self-hosted woff2 subsets for weights 400/600/700/800)
- **Common layout pattern**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Headlines**: `font-black uppercase tracking-tighter`
- **Buttons**: `bg-red-600 hover:bg-red-700` primary; `border-2 border-white` secondary
- **Focus states**: `focus:ring-2 focus:ring-red-600` or `focus:ring-4 focus:ring-red-600/50`

---

## Component Conventions

- All components are default-export functional components typed as `React.FC`.
- Components import content from `../content` (pages) or `./content` is not used; they use `../content` relative path.
- Page components do not accept props; they read from the global `content` object.
- Icons are inline SVGs, not from an icon library.

---

## Images and Assets

All images are stored in `/public/`:

**Service images:**
- `/balkon.webp` — Balcony renovation
- `/garage.webp` — Garage coating
- `/kueche.webp` — Kitchen/hygienic floors
- `/foodvan.webp` — Sales trailer coating
- `/treppe.webp` — Stair coating
- `/newtreppe.jpeg` — Hero image (also used for stair service)

**Reference gallery (before/after):**
- `/a1.webp` – `/b5.webp` (5 project pairs)

**Fonts:**
- `/fonts/inter-{400,600,700,800}.woff2` — Self-hosted Inter subsets

**Guidelines for adding images:**
- Use `.webp` format (except the existing `newtreppe.jpeg`)
- Place in `/public/`
- Reference with root-relative paths (e.g., `/garage.webp`)
- Provide `width` and `height` attributes where possible
- Use `loading="lazy"` for below-the-fold images; `fetchPriority="high"` for hero

---

## Contact Form

Located in `pages/Contact.tsx`.
- Backend: Web3Forms (`https://api.web3forms.com/submit`)
- Access key is read from `content.company.contact.web3forms_key`
- Fields: name, email, phone (optional), message
- Honeypot field (`website`) is hidden from users and aborts submission if filled
- No backend required; form submissions go to the configured email

---

## Accessibility Features

- Semantic HTML: `nav`, `main`, `footer`, `section`, `article`
- Skip-to-content link in Navigation
- ARIA labels on navigation and cookie banner
- Keyboard focus indicators (`focus:ring` classes)
- Alt text on all images
- Form inputs have associated `<label>` elements
- Mobile menu uses `aria-expanded` and `aria-controls`

---

## Security Considerations

- Content Security Policy configured in `netlify.toml`
- X-Frame-Options: DENY
- SSL/TLS enforced by Netlify (HSTS header)
- Form submissions use HTTPS
- No sensitive data stored client-side except cookie consent in `localStorage`
- Contact form includes a honeypot field for basic bot mitigation

---

## SEO

- Canonical URL, Open Graph, and Twitter Card meta tags in `index.html`
- `robots.txt` and `sitemap.xml` in `/public/`
- `lang="de"` on `<html>`

---

## Deployment

**Platform**: Netlify

**Build settings** (in `netlify.toml`):
- Build command: `npm run build`
- Publish directory: `dist`

**Pre-deployment checklist:**
1. Verify Web3Forms access key in `content.ts` is valid
2. Confirm all images are in `/public/`
3. Test contact form submission
4. Verify cookie banner displays on first visit
5. Check that `GEMINI_API_KEY` is set in environment variables if used by any feature

---

## Environment Variables

Create `.env.local` in the project root if needed:

```
GEMINI_API_KEY=your_api_key_here
```

Vite exposes this as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY` at build time.

---

## Development Guidelines

1. **Adding new pages**: Create component in `pages/`, add route in `App.tsx`, add nav link in `content.ts`.
2. **Adding new services**: Add to `content.ts` under `pages.services` — will auto-appear on Home and Services pages.
3. **Styling**: Use Tailwind utility classes; avoid custom CSS.
4. **Images**: Always provide width/height attributes for LCP images; prefer `.webp`.
5. **Text content**: Edit `content.ts`, not components directly.
6. **No tests**: This project does not have a test suite. Manual verification is required.

---

## Troubleshooting

| Issue | Resolution |
|-------|------------|
| Images not loading | Check that files are in `/public/` and referenced with root path (`/filename.webp`) |
| Contact form not working | Verify Web3Forms access key is valid and endpoint is reachable |
| Routes not working on refresh | Ensure Netlify `netlify.toml` redirect `/*` → `/index.html` is configured |
| Environment variables missing | Restart dev server after editing `.env.local` |
| Tailwind classes not reflecting | `tailwind.config.js` changes may require a dev server restart |
