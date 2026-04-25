# Aperture Strategic

Single-page marketing site for Aperture Strategic.

## Stack

- Next.js 14 (App Router) · TypeScript
- Tailwind CSS 3
- Inter + JetBrains Mono via `next/font/google` (self-hosted at build time)

No analytics, no cookie banner, no third-party runtime scripts.
The page is fully static — one route, rendered at build time,
served from Vercel's edge.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

A git history is already initialized on the `main` branch with the
initial commit.

1. Create an empty GitHub repository (for example `aperture-strategic`).
   Do not initialize it with a README.
2. From this directory:

   ```bash
   git remote add origin git@github.com:<your-account>/aperture-strategic.git
   git push -u origin main
   ```

3. Go to <https://vercel.com/new> and import the repository.
   Vercel auto-detects Next.js — no configuration is needed.
4. In Project → Settings → Domains, add `aperture-strategic.com`
   and `www.aperture-strategic.com`, then point DNS per Vercel's
   instructions.

Alternative, skipping GitHub:

```bash
npx vercel         # first run: authenticate and link the project
npx vercel --prod  # deploy to production
```

## File layout

```
app/
  layout.tsx     # Fonts, <head> metadata, root HTML
  page.tsx       # Header, hero, practice, approach, contact, footer
  globals.css    # Tailwind layers, selection color, reduced-motion
public/
  favicon.svg    # Aperture mark
tailwind.config.ts
tsconfig.json
next.config.mjs
postcss.config.mjs
package.json
.gitignore
```

## Design tokens

Defined in `tailwind.config.ts`:

| Token     | Value                      | Usage                  |
| --------- | -------------------------- | ---------------------- |
| navy      | #0A1628                    | Background             |
| offwhite  | #E8EDF5                    | Body and heading text  |
| cyan      | #06B6D4                    | Links and accent       |
| muted     | #6B7B8F                    | Secondary text         |
| hairline  | rgba(232, 237, 245, 0.08)  | Dividers               |
| font-sans | Inter                      | Body and headings      |
| font-mono | JetBrains Mono             | Section labels, footer |

## Copy

The headline, subhead, and three practice-area paragraphs in
`app/page.tsx` are final, shippable copy — not placeholder text.
Edit in place as needed.
