# Sachin Singh - Personal Portfolio 🚀

A modern, dynamic, and fully responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This project elegantly showcases my skills, development experience, and dynamically fetches live projects directly from GitHub.

## ✨ Features

- **Modern Dark UI:** A stunning, premium dark-mode aesthetic featuring carefully selected colors, glowing gradients, and glassmorphism.
- **Interactive Backgrounds:** Custom-built interactive `<Waves />` background component powered by `simplex-noise` running at 60fps on a mathematical SVG canvas that perfectly tracks the user's mouse.
- **Fluid Animations:** Sleek entrance reveals and scroll-based motion choreography backed by Framer Motion.
- **Live GitHub Integration:** The **Projects** tab dynamically fetches repositories from the live GitHub API, featuring an automatic fallback to local JSON data to gracefully handle API rate limiting.
- **Fully Responsive:** Meticulously engineered to adapt seamlessly across mobile devices, tablets, and high-resolution desktops.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) & [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Mathematical Graphics:** `simplex-noise` for organic real-time noise rendering
- **Routing:** React Router DOM

## 📂 Project Architecture

- `src/pages/` - Core pages encompassing the `Home`, `About`, `Projects`, `Skills`, `Contact`, and `NotFound` router paths.
- `src/components/` - Global, reusable UI pieces (e.g. `Waves`, `Navbar`, `HeroGeometric`).
- `src/data/` - Static snapshot data serving to protect the UI from rendering errors when GitHub API rate thresholds are exceeded.

## 💻 Running Locally

To get a local copy up and running, follow these simple steps.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ssachin15/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   Make sure you have Node installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📬 Contact Me

- **GitHub:** [@ssachin15](https://github.com/ssachin15)

---
*Built with ❤️ by Sachin Singh*
