Migrate the project from TanStack Start (SSR + file-based routing) to a standard Vite + React SPA with React Router. This is a one-way change — TanStack Start, its file-based routes, server entry, and SSR wiring will be removed.

## What changes

**Remove (TanStack Start / SSR):**
- `src/routes/__root.tsx`, `src/router.tsx`, `src/routeTree.gen.ts`
- `src/server.ts`, `src/start.ts`, `src/lib/error-capture.ts`, `src/lib/error-page.ts`
- `src/lib/api/example.functions.ts`, `src/lib/config.server.ts`
- `vite.config.ts` (replace with standard Vite + React config)
- Dependencies: `@tanstack/react-start`, `@tanstack/react-router`, `@lovable.dev/vite-tanstack-config`, nitro-related plugins

**Add:**
- `index.html` (Vite SPA entry)
- `src/main.tsx` (React root)
- `src/App.tsx` (BrowserRouter + Routes)
- `react-router-dom` dependency
- New `vite.config.ts` using `@vitejs/plugin-react` + `@tailwindcss/vite`

**Rewrite (one per existing page):**
- `src/routes/index.tsx` → `src/pages/Home.tsx`
- `src/routes/about.tsx` → `src/pages/About.tsx`
- `src/routes/services.tsx` → `src/pages/Services.tsx`
- `src/routes/programs.tsx` → `src/pages/Programs.tsx`
- `src/routes/contact.tsx` → `src/pages/Contact.tsx`
- Convert `createFileRoute(...)` + `head()` → plain React components + `react-helmet-async` (or `<title>` set in effect) for per-page SEO
- Update `<Link to="/about">` from `@tanstack/react-router` → `react-router-dom` (same API)

**Keep unchanged:**
- All `src/components/**` (Navbar, Footer, WhatsAppFloat, RegisterDialog, UI primitives)
- `src/styles.css`, Tailwind tokens, design system
- All form Formspree wiring

## Trade-offs you should know

- **No more SSR** — pages render client-side only. SEO/meta tags will be set via React Helmet (still works for crawlers that execute JS, like Google, but weaker than SSR for previews on Twitter/LinkedIn/WhatsApp link unfurls).
- **Lovable Cloud server functions** would stop working in this setup. You currently don't use any, so no impact today — but if you later want server-side logic (payments, sending emails server-side, secrets), you'd need to add a backend separately.
- **Forms work fine** — Formspree is pure client-side POST, unaffected.

## Plan

1. Add `react-router-dom`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `react-helmet-async`. Remove TanStack/Nitro packages.
2. Write new `vite.config.ts`, `index.html`, `src/main.tsx`, `src/App.tsx` with routes for `/`, `/about`, `/services`, `/programs`, `/contact`, and a 404.
3. Move each route file's component into `src/pages/*.tsx`, swap `createFileRoute` head() → `<Helmet>` tags, swap TanStack `Link` → `react-router-dom` `Link`.
4. Update `Navbar` and `Footer` Link imports to `react-router-dom`.
5. Delete all removed files listed above.
6. Verify build, navigate every page in the preview, confirm Formspree forms still submit.

After this is done the project is a pure Vite SPA and the deploy-blocking TanStack/SSR build path is gone.