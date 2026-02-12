# Engler Bodenbeschichtung Website

## Project Overview

This is a German-language React-based website for **Engler Bodenbeschichtung**, a floor coating business based in Breisach, Germany. The company specializes in balcony renovation, garage coating, and hygienic flooring solutions for both residential and commercial clients.

The website serves as a marketing and contact platform, featuring service descriptions, before/after reference galleries, and a contact form.

**Language**: German (DE)  
**Primary Market**: Breisach and surrounding region (Freiburg area)

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.4 | UI library |
| React DOM | 19.2.4 | DOM rendering |
| React Router DOM | 7.13.0 | Client-side routing |
| TypeScript | 5.8.2 | Type safety |
| Vite | 6.2.0 | Build tool and dev server |
| Tailwind CSS | via CDN | Utility-first styling |
| Web3Forms | - | Contact form backend |

---

## Project Structure

```
├── components/           # Reusable React components
│   ├── Layout.tsx       # Page layout wrapper (Nav + Footer)
│   ├── Navigation.tsx   # Fixed header navigation with mobile menu
│   ├── Footer.tsx       # Site footer with contact info
│   └── CookieBanner.tsx # GDPR cookie consent banner
├── pages/               # Route-level page components
│   ├── Home.tsx         # Landing page with hero, stats, services preview
│   ├── Services.tsx     # Detailed service offerings
│   ├── References.tsx   # Before/after project gallery
│   ├── Contact.tsx      # Contact form and company info
│   └── Legal.tsx        # Impressum and Datenschutz (legal pages)
├── public/              # Static assets (images in .webp format)
├── content.ts           # Centralized content configuration
├── types.ts             # TypeScript type definitions
├── App.tsx              # Root component with routing
├── index.tsx            # Application entry point
├── index.html           # HTML template (with Tailwind CDN)
└── Configuration files:
    ├── vite.config.ts   # Vite build configuration
    ├── tsconfig.json    # TypeScript configuration
    ├── tailwind.config.js # Tailwind CSS configuration
    └── netlify.toml     # Netlify deployment configuration
```

---

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## Configuration Files

### vite.config.ts
- Dev server runs on port 3000, host 0.0.0.0
- Loads environment variables from `.env.local`
- Path alias `@/` maps to project root
- Defines `process.env.API_KEY` and `process.env.GEMINI_API_KEY` from `GEMINI_API_KEY` env var

### tsconfig.json
- Target: ES2022
- Module: ESNext
- JSX: react-jsx
- Path alias: `@/*` → `./*`
- Experimental decorators enabled

### tailwind.config.js
- Scans files: `./*.{tsx,html,js,ts}`, `./components/**/*.{tsx,ts}`, `./pages/**/*.{tsx,ts}`
- Custom color: `red.600` = #DC2626, `red.700` = #B91C1C

### netlify.toml
- Build output: `dist/`
- SPA redirect: `/*` → `/index.html`
- Security headers configured (X-Frame-Options, CSP, etc.)
- Asset caching: 1 year for `/assets/*`

---

## Content Management

All site content is centralized in `content.ts` with TypeScript types defined in `types.ts`.

**Key content sections:**
- `site` - Site metadata (name, tagline, description, URL, language)
- `company` - Business info (owner: Birgit Engler, address, contact)
- `navigation` - Navigation menu items
- `pages.home` - Hero section, stats, intro text
- `pages.services` - Array of 5 services with features and images
- `pages.legal` - Impressum and Datenschutz text

**To update content**: Edit `content.ts` - the types in `types.ts` enforce the structure.

---

## Routing

Uses `HashRouter` for client-side navigation (compatible with static hosting):

| Route | Path | Component |
|-------|------|-----------|
| Home | `/` | Home.tsx |
| Services | `/leistungen` | Services.tsx |
| References | `/referenzen` | References.tsx |
| Contact | `/kontakt` | Contact.tsx |
| Legal | `/impressum` | Legal.tsx |

---

## Styling Conventions

- **Color scheme**: Dark theme (neutral-900 background) with red accent (red-600)
- **Typography**: Inter font family via Google Fonts
- **CSS framework**: Tailwind CSS (loaded from CDN in index.html)
- **Responsive breakpoints**: Tailwind defaults (sm: 640px, md: 768px, lg: 1024px)

**Common utility patterns:**
- `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` - Container layout
- `font-black uppercase tracking-tighter` - Headline styling
- `text-neutral-300` / `text-neutral-400` - Body text colors
- `bg-red-600 hover:bg-red-700` - Primary button styling

---

## Environment Variables

Create `.env.local` in project root:

```
GEMINI_API_KEY=your_api_key_here
```

Note: The Vite config exposes this as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY`.

---

## Contact Form

The contact form in `pages/Contact.tsx` uses Web3Forms (https://web3forms.com/):
- Endpoint: `https://api.web3forms.com/submit`
- Access key is hardcoded in the component: `bd7325dc-9dc5-4162-8965-726662768eb4`
- Form fields: name, email, phone (optional), message
- No backend required - form submissions go to the configured email

---

## Image Assets

All images are stored in `/public/` as `.webp` files:

**Service images:**
- `/balkon.webp` - Balcony renovation
- `/garage.webp` - Garage coating (also used as hero image)
- `/kueche.webp` - Kitchen floors
- `/foodvan.webp` - Sales trailer coating
- `/treppe.webp` - Stair coating

**Reference gallery (before/after pairs):**
- `/a1.webp` - `/b5.webp` (various project photos)

**When adding images:**
- Use `.webp` format for better performance
- Place in `/public/` directory
- Reference with root-relative paths (e.g., `/garage.webp`)

---

## Accessibility Features

- Semantic HTML elements (nav, main, footer, section, article)
- ARIA labels for navigation and cookie banner
- Keyboard focus indicators (focus:ring classes)
- Alt text on all images
- Reduced motion not currently implemented

---

## Security Considerations

- Content Security Policy configured in `netlify.toml`
- X-Frame-Options: DENY
- SSL/TLS enforced by Netlify
- Form submissions use HTTPS
- No sensitive data stored client-side (except cookie consent in localStorage)

---

## Deployment

**Platform**: Netlify

**Build settings** (in netlify.toml):
- Build command: `npm run build`
- Publish directory: `dist`

**Pre-deployment checklist:**
1. Set `GEMINI_API_KEY` in Netlify environment variables
2. Verify Web3Forms access key is valid
3. Confirm all images are in `/public/`
4. Test contact form submission
5. Verify cookie banner displays on first visit

---

## Development Guidelines

1. **Adding new pages**: Create component in `pages/`, add route in `App.tsx`, add nav link in `content.ts`
2. **Adding new services**: Add to `content.ts` `pages.services` array - will auto-appear on Home and Services pages
3. **Styling**: Use Tailwind utility classes; avoid custom CSS
4. **Images**: Always provide width/height attributes for LCP images
5. **Text content**: Edit `content.ts`, not components directly

---

## Troubleshooting

**Images not loading**: Check that files are in `/public/` and referenced with root path (`/filename.webp`)

**Contact form not working**: Verify Web3Forms access key is valid and form endpoint is accessible

**Routes not working on refresh**: Ensure Netlify `_redirects` or `netlify.toml` redirect rules are configured

**Environment variables not available**: Restart dev server after editing `.env.local`
