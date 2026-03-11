# asyncnikhil.in — Portfolio

A modern, responsive developer portfolio built with React 19, Tailwind CSS 4, and Framer Motion. Features a glass-morphism design system, animated mobile navigation, project showcase with detail pages, and a working contact form.

## Live Preview

**[https://asyncnikhil.vercel.app/](https://asyncnikhil.vercel.app/)**

## Tech Stack

| Category    | Technologies                                                  |
| ----------- | ------------------------------------------------------------- |
| Framework   | React 19, Vite 7                                              |
| Styling     | Tailwind CSS 4 (via `@tailwindcss/vite`)                      |
| Animations  | Framer Motion                                                 |
| Routing     | React Router DOM 7, React Router Hash Link                    |
| Icons       | React Icons (FontAwesome, Simple Icons, and more)             |
| Typewriter  | react-simple-typewriter                                       |
| Contact     | EmailJS (credentials via `.env`)                              |
| Linting     | ESLint 9                                                      |

## Features

- **Responsive Design** — Mobile-first layout across all sections
- **Glass Navbar** — Desktop glass-morphism nav with conic-gradient animation + premium mobile slide-in panel with staggered link animations, social links, and Escape/backdrop close
- **Hero Section** — Typewriter effect, animated CTA with glass sweep, rotating ring around profile photo, reduced-motion support
- **Projects Grid** — Status badges (completed/in-progress), tech tags, hover quick-action buttons, staggered entrance animations
- **Project Detail Pages** — Full project breakdown with image, features list, tech stack chips with icons, quick stats, multi-link support (live demo, GitHub, admin panel, backend repo), prev/next navigation
- **Skills Section** — 6 categorized skill groups with doc links and hover effects
- **About Section** — Bio, certificates with images, career goals
- **Contact Form** — EmailJS integration with loading/success/error states, form validation
- **Footer** — Quick links, docs & tools grid, social icons, FAQs with accordions
- **Scroll to Top** — Appears after 300px scroll
- **Accessibility** — `aria-labels`, `alt` text, keyboard navigation, `prefers-reduced-motion` support
- **SEO** — Meta description, theme-color, semantic HTML

## Project Structure

```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Router setup, shared Navbar & ScrollToTop
├── index.css                 # Tailwind import, glass design system, global styles
│
├── Pages/
│   ├── Home.jsx              # Landing page (Hero + Projects + Skills + About + Contact + Footer)
│   └── ProjectDetails.jsx    # Individual project detail page
│
├── components/
│   ├── Navbar.jsx            # Fixed navbar (desktop glass + mobile slide-in panel)
│   ├── Hero.jsx              # Hero section with typewriter & profile image
│   ├── Projects.jsx          # Projects grid with cards
│   ├── Skills.jsx            # Skills by category
│   ├── About.jsx             # About me, certificates, career goals
│   ├── Contact.jsx           # Contact form (EmailJS)
│   ├── Footer.jsx            # Footer with links, socials, FAQs
│   ├── ScrollToTop.jsx       # Scroll-to-top button
│   └── css/
│       ├── Navbar.css        # Glass navbar conic-gradient animation
│       └── Projects.css      # line-clamp fallback
│
├── constants/
│   ├── projectsData.js       # All project data (6 projects)
│   └── techIcons.jsx         # TECH_ICONS map (tech name → icon component)
│
├── hooks/
│   └── useActiveSection.js   # IntersectionObserver hook for active nav highlighting
│
└── assets/
    └── nikhil.jpg            # Profile photo
```

```
public/
├── resume.pdf
├── vite.svg
├── certificates/             # Certificate images (3 files)
└── projects/                 # Project screenshots (6 files)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/devNikhil00/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=xxxxx
```

Get these values from your [EmailJS dashboard](https://dashboard.emailjs.com/).

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview   # preview the build locally
```

### Lint

```bash
npm run lint
```

## Routes

| Path             | Component        | Description                |
| ---------------- | ---------------- | -------------------------- |
| `/`              | Home             | Landing page (all sections)|
| `/project/:id`   | ProjectDetails   | Individual project page    |

## Design System

- **Colors** — Orange-500 accents, blue `#1e90ff` borders, dark backgrounds (`#0a0e17`, `#0d1117`)
- **Glass** — `backdrop-blur`, translucent borders, conic-gradient animated borders
- **Cards** — `rounded-xl`, `border-[#1e90ff30]`, hover glow `shadow-[0_0_10px_#1e90ff80]`
- **Typography** — Responsive heading sizes (`text-3xl sm:text-4xl md:text-6xl`)

## License

This project is for personal portfolio use.
