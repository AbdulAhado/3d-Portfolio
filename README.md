# 🌌 3D Portfolio Pro

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.design&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r170-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A state-of-the-art, immersive **3D Interactive Developer Portfolio** designed with React 19, Next.js 15 (App Router), and Three.js. It features stunning animations, custom shaders, smooth momentum scrolling, dynamic transitions, and modern glassmorphic aesthetics.

---

## 🌟 Key Features

- **🌐 Immersive 3D Graphics**: Driven by React Three Fiber (R3F) & Drei utilizing Three.js for interactive scenes, custom floating objects, and 3D card tilts.
- **⚡ Zero-Delay Eager Loading**: Sections are pre-loaded in memory for instantaneous (0ms) page transitions.
- **✨ Ultra-Smooth Animations**: Enhanced with GSAP (GreenSock) & Framer Motion for high-fidelity micro-interactions and transitions.
- **🎨 Tailwind CSS v4 + Glassmorphism**: Stunning modern design elements with customized dark mode styling, custom scrollbars, and a responsive floating navbar.
- **✉️ Seamless Contact Form**: Powered by EmailJS for direct client communication.
- **💫 Custom Interactive Cursor**: A dynamic fluid cursor tracking user focus.
- **🎯 Dynamic Routing**: Deep detail pages for project showcase using Next.js Dynamic Routes (`/project-details/[id]`).

---

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15.1.7** | React framework for static page rendering and fast routing |
| **3D Rendering** | **Three.js / React Three Fiber / Drei** | WebGL graphics, camera control, lighting, and math helper tools |
| **Animations** | **GSAP & Framer Motion** | Timeline control, entrance/exit page transitions, and hover effects |
| **Styling** | **Tailwind CSS v4 & PostCSS** | Next-gen utility-first styling |
| **Scrolling** | **Lenis** | Smooth momentum-based scrolling across devices |
| **Contact** | **EmailJS Browser** | Serverless email sending integration |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed (version 18+ recommended):
```bash
node -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbdulAhado/3d-Portfolio.git
   cd 3d-Portfolio
   ```

2. **Install dependencies:**
   *(Note: The project utilizes React 19. If you encounter dependency issues, legacy-peer-deps are configured automatically in `.npmrc`)*
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` or `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment & Vercel Fix

This project is fully ready for deployment on **Vercel**.

> [!TIP]
> **React 19 Compatibility Note**:
> Because React 19 is used, some packages (like `@react-three/drei`) might report peer dependency warnings.
> This repository includes an [`.npmrc`](.npmrc) file with:
> ```ini
> legacy-peer-deps=true
> ```
> This guarantees successful Vercel builds automatically without throwing peer-dependency blockages.

---

## 📁 Project Structure

```
├── public/                 # Static assets (3D models, icons)
└── src/
    ├── app/                # Next.js App Router (Pages, Layouts, CSS)
    │   ├── project-details/ # Dynamic project page
    │   ├── layout.jsx
    │   └── page.jsx
    ├── components/
    │   ├── 3D/             # 3D Components (Card3D, Scene3D)
    │   ├── three/          # HeroScene canvas
    │   ├── sections/       # Portfolio Sections (Hero, About, Skills, Projects, Experience, Contact)
    │   ├── ui/             # Reusable UI widgets (CustomCursor, ThemeToggle)
    │   └── layout/         # Header, Navbar, Footer
    └── styles/             # Modular CSS styling
```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
