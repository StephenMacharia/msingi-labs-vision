## Plan: Integrate Msingi Labs brand assets

### Assets
- `logo_v1.png` — full horizontal logo (Africa + robot mark + "Msingi Labs" wordmark + tagline)
- `logov3.png` — circular icon-only version (favicon / compact use)

### Steps

1. **Copy assets into the project**
   - `user-uploads://logo_v1.png` → `src/assets/msingi-logo.png` (full logo, imported as ES6)
   - `user-uploads://logov3.png` → `src/assets/msingi-icon.png` (icon, imported as ES6)
   - Also copy the icon to `public/favicon.png` so browsers pick it up as the tab icon

2. **Navbar (`src/components/site/Navbar.tsx`)**
   - Replace the current gradient-square + `Cpu` icon + text wordmark with the real full logo (`msingi-logo.png`)
   - Keep it crisp: render at ~h-10 on desktop, h-9 on mobile, with `width`/`height` set for layout stability
   - Remove the inline "Msingi Labs" text since the logo already contains it

3. **Footer (`src/components/site/Footer.tsx`)**
   - Same swap: replace the gradient-square + Cpu + text with the full logo
   - Sits naturally on the dark background

4. **Favicon / head links (`src/routes/__root.tsx`)**
   - Add `<link rel="icon" type="image/png" href="/favicon.png" />` and `apple-touch-icon` to the root route's `links` array
   - Add `og:image` pointing to the full logo so social shares show branded preview

5. **Optional polish**
   - Use the circular icon as a subtle decorative element in the hero (small floating badge) — only if it reads well; otherwise skip to avoid clutter

### Files touched
- `src/components/site/Navbar.tsx`
- `src/components/site/Footer.tsx`
- `src/routes/__root.tsx`
- New: `src/assets/msingi-logo.png`, `src/assets/msingi-icon.png`, `public/favicon.png`

No content/copy changes, no route changes — purely brand asset integration.
