# Sayan Datta — Developer Portfolio

A modern, performant personal portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Features dark/light theming, smooth animations, and a fully responsive design.

🔗 **Live:** [sayandatta.co.in](https://sayandatta.co.in)

---

## ✨ Features

- **Dark / Light Theme** — Seamless toggling powered by `next-themes`
- **Responsive Design** — Mobile-first layouts that look great on every screen size
- **Smooth Animations** — Page transitions and micro-interactions via Framer Motion
- **SEO Optimized** — Proper meta tags, semantic HTML, and metadata API
- **Modern Typography** — Inter (body) + Outfit (headings) from Google Fonts
- **Component-Based** — Clean, reusable React component architecture

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, services, skills, featured projects, and CTA |
| Projects | `/projects` | Showcase of open-source and professional work |
| About Me | `/about-me` | Background, experience, and education |
| Blog | `/blog` | Articles and technical writing |
| Contact | `/contact` | Contact form and social links |

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **UI** | React 19, Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Theming** | next-themes |
| **Utilities** | clsx, tailwind-merge |
| **Linting** | ESLint 9 |

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about-me/         # About page
│   ├── blog/             # Blog page
│   ├── contact/          # Contact page
│   ├── projects/         # Projects page
│   ├── globals.css       # Global styles & design tokens
│   ├── layout.tsx        # Root layout (fonts, navbar, footer, theme)
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── ui/               # Base UI primitives (Button, etc.)
│   ├── Navbar.tsx        # Main navigation
│   ├── Footer.tsx        # Site footer
│   ├── ProjectCard.tsx   # Project display card
│   ├── ThemeProvider.tsx  # Theme context provider
│   └── ThemeToggle.tsx   # Dark/light mode toggle
└── data/                 # Static data & content
    └── custom-projects.ts # Project definitions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/iamsayan/developer-portfolio.git
cd developer-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply connect your GitHub repo and deploy — no extra configuration needed.

You can also deploy to any platform that supports Next.js (Netlify, AWS, Docker, etc.).

## 📝 License

This project is private and not licensed for redistribution.

---

Built with ☕ by **[Sayan Datta](https://sayandatta.co.in)**
