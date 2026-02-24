# Manvitha Dungi – Portfolio Website

A **personal portfolio website** built using **React.js** to showcase projects, skills, and professional experience. 

Recently completely redesigned, the new architecture represents a modern SaaS hybrid aesthetic inspired by **Linear.app** and 90s cyberpunk anime (*Ghost in the Shell*, *Neon Genesis Evangelion*). It features a cinematic, dark atmospheric design, glowing violet and cyan accents, CSS scan-line overlays, subtle noise grain backgrounds, and typography-rich Framer Motion animations.

This portfolio is built to reflect **senior-level software engineering paradigms**, utilizing atomic component structure, declarative data modeling, robust SEO/accessibility standards, and interactive micro-animations.

---

## 🚀 Key Features

### **Architecture & UI/UX**
- **Component Architecture** – Professional-grade structure featuring atomic UI elements (`Button`, `Card`, `Tag`, `SectionLabel`).
- **Cinematic Aesthetic** – Fully custom dark-mode CSS utilizing deep glows, CSS-generated scanlines, SVG noise grain, and atmospheric drop-shadows.
- **Dynamic Load States** – Custom brutalist sub-second "M.D" load-screen glitch acting as an initial suspense veil before App mount.
- **Accessibility & Compliance** – Strictly adheres to WCAG contrast minimums, complete with `aria-label` screen reader tags. Complete custom 404 error routing boundary logic.
- **SEO Optimized** – Pre-packaged with complete Open Graph (OG) meta tags, Twitter cards, dynamically-generated `sitemap.xml`, and `robots.txt`. 

### **Content Experiences**
- **Senior-Level Project Overviews** – Project data structured via Problem / Solution / Tradeoff / Outcome matrices to give recruiters detailed engineering context.
- **Dynamic Data Rendering** – Data models fully abstracted away into `src/data/`, keeping presentational React components pure.
- **Interactive Timelines & Metrics** – Real-time animated `react-countup` metric blocks for hackathons and projects, underscored by a complete CSS-generated `Experience` timeline log.
- **Resume Embed** – Direct PDF-viewer `<iframe>` integration with customized UI download fallbacks for easy recruiter access.
- **Micro-Animations** – Staggered `framer-motion` reveals via custom `useScrollReveal` hooks alongside bespoke CSS-keyframe glitch and typewriter effects.

---

## 🛠️ Tech Stack

- **Frontend Core:** React.js, React Router DOM (v6)
- **Animation Engine:** Framer Motion, React-CountUp
- **Styling:** Custom CSS3 Variables (`globals.css`, `animations.css`, `components.css`)
- **Typography:** Custom Google Fonts integraton (`Space Grotesk`, `IBM Plex Mono`, `Bebas Neue`)
- **Build Tool:** Create React App (react-scripts)
- **Deployment:** GitHub Pages (via `gh-pages` branch)

---

## 📂 Project Structure

```text
public/
├── images/                # Asset storage
├── sitemap.xml            # Search Engine Map
└── robots.txt             # Crawler Logic
src/
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Page Sections (Hero, About, Projects, etc.)
│   └── ui/                # Reusable Primitives (Button, Card, AnimatedText, etc.)
├── data/
│   ├── projects.js        # Centralized project descriptions
│   └── skills.js          # Centralized skill definitions
├── hooks/
│   └── useScrollReveal.js # Intersect observer logic for Framer Motion
├── pages/
│   ├── Home.jsx           # Main aggregator
│   ├── NotFound.jsx       # 404 Catch-All Route
│   └── ...                # Individual routed views
├── styles/
│   ├── globals.css        # Root variables, resets, scanlines
│   ├── animations.css     # Glitches, blinking cursors
│   ├── components.css     # Abstracted UI component styling
│   └── sections.css       # Layout styles for distinct sections
├── App.jsx
└── index.jsx
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ManvithaDungi/MyPortfolio.git
cd MyPortfolio
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the development server
```bash
npm start
```
The app will dynamically run on **http://localhost:3000/MyPortfolio**.

### 4️⃣ Build for production
```bash
npm run build
```

### 5️⃣ Deploy to GitHub Pages
```bash
npm run deploy
```

---

## 📬 Contact

👩‍💻 **Manvitha Dungi**  
📧 **Email:** [manvitha3626@gmail.com](mailto:manvitha3626@gmail.com)  
🔗 **LinkedIn:** [Manvitha Dungi](https://www.linkedin.com/in/manvitha-dungi-8a8040211/)  
💻 **GitHub:** [ManvithaDungi](https://github.com/ManvithaDungi)
