# MEGA Suite (Kingdom Mindset & Encouragement)

A Next.js 14 + TypeScript + Tailwind CSS app suite rebuilt from screenshots. Includes Supabase auth and Prisma (Postgres) models for journaling, planning, habits, and encouragement tools.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Supabase (Auth) + Prisma ORM on Postgres (use Supabase DB)

## Getting Started
1) Clone the repo  
2) Create a Supabase project and grab your keys  
3) Copy `.env.example` to `.env` and fill values  
4) Install and migrate
```bash
npm install
npx prisma migrate dev
npm run dev
```

## Features (initial scaffold)
- App layout: gradient header + left sidebar navigation
- Auth screens (sign in / sign up)
- Dashboard (KPIs + recent activity placeholders)
- Daily Dump with Overwhelm Level Check and API route to save entries
- Weekly Planning sheet skeleton
- Daily Affirmation screen
- Prisma schema for all core entities to extend later (reflections, delegation, prayer, habits, confidence, A.I.R., nurture, etc.)

## Project Structure (high level)
```
app/
  api/
    daily-dump/
      route.ts
  affirmation/
    page.tsx
  daily-dump/
    page.tsx
  dashboard/
    page.tsx
  weekly-planning/
    page.tsx
  signin/
    page.tsx
  layout.tsx
  page.tsx (redirect)
lib/
  prisma.ts
  supabaseClient.ts
  supabaseServer.ts
prisma/
  schema.prisma
styles via app/globals.css
```

## Notes
- This is a starting point to rebuild the full MEGA Suite as shown in the screenshots. We will add additional modules (Mega Reflection, Task Delegation, Ask God, My Saved Data, Mega 9-Day Habits, Confidence Builder, A.I.R. Method, Nurture & Growth) in subsequent commits.
- If you prefer a different backend, we can swap Supabase for another provider.