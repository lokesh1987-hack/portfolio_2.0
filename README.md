# Alex Rivera — Full Stack Developer Portfolio

A dark & futuristic developer portfolio built with **Next.js 14**, **TypeScript**, and **Framer Motion**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Type Animation:** react-type-animation
- **Intersection Observer:** react-intersection-observer
- **Styling:** CSS Modules + Google Fonts (Space Mono + Syne)

## Sections

- **Hero** — Animated intro with typewriter role, stats panel, and social links
- **Skills** — Animated skill bars across Frontend / Backend / DevOps + tech badge cloud
- **Projects** — Filterable project cards (Full Stack / Frontend / Backend)
- **Experience** — Tabbed work timeline with role details
- **Testimonials** — Carousel with recruiter & colleague quotes
- **Contact** — Form with validation + availability status panel

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customisation Checklist

1. **`components/Hero.tsx`** — Update your name, bio, and social links
2. **`components/Skills.tsx`** — Adjust skill names and percentages
3. **`components/Projects.tsx`** — Replace with your real projects (add GitHub/live URLs)
4. **`components/Experience.tsx`** — Fill in your actual work history
5. **`components/Testimonials.tsx`** — Add real testimonials from colleagues/managers
6. **`components/Contact.tsx`** — Update email, phone, and location
7. **`app/layout.tsx`** — Update the `<title>` and `<description>` metadata
8. **`public/resume.pdf`** — Add your actual resume PDF

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy is via [Vercel](https://vercel.com):

```bash
npx vercel
```

Or push to GitHub and connect the repo to Vercel for automatic deployments.

## Color Scheme

| Variable | Value | Use |
|---|---|---|
| `--bg` | `#050A0F` | Main background |
| `--bg2` | `#0C1520` | Section background |
| `--cyan` | `#00F5FF` | Primary accent |
| `--green` | `#00FF88` | Success / availability |
| `--purple` | `#9B4DFF` | Secondary accent |
| `--amber` | `#FFB800` | Highlight accent |

To change the accent color, update `--cyan` in `app/globals.css`.
