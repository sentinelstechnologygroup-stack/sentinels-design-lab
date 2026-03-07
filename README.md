# Sentinels Design Lab — Next.js Starter



## What changed
- Replaced React Router with Next.js App Router
- Added a shared `app/layout.jsx`
- Converted navigation to stable production routes:
  - `/`
  - `/work`
  - `/services`
  - `/industries`
  - `/platform`
  - `/process`
  - `/insights`
  - `/about`
  - `/start-project`
  - `/contact`

- Made Insights static so content is no longer tied to external data

## Run locally
```bash
npm install
npm run dev
```

## Recommended next production steps
1. Replace placeholder form submits with server actions or API routes
2. Move insights posts into markdown/MDX or CMS
3. Add real case studies and project thumbnails
4. Add metadata per route
5. Harden image strategy and analytics
