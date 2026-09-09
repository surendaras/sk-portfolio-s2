# 👨‍💻 Surendra Kumar — Full Stack & MERN Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-sk--portfolio--s2.vercel.app-f59e0b?style=for-the-badge&logo=vercel&logoColor=white)](https://sk-portfolio-s2.vercel.app/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

A modern, responsive, and performance-optimized personal portfolio web application built with **React.js, Vite, and Framer Motion**, showcasing industry experience, verified projects, and technical proficiencies as a **Frontend & MERN Full Stack Developer**.

---

## 🌟 Live Demo & Preview

🔗 **Portfolio URL:** [https://sk-portfolio-s2.vercel.app/](https://sk-portfolio-s2.vercel.app/)

- 🎨 **Design System:** Bespoke **Warm Obsidian & Sunset Amber** human-crafted palette
- 📱 **Responsiveness:** 100% Mobile, Tablet & Desktop optimized
- ⚡ **Performance:** Instant page transitions with Framer Motion and Vite bundling
- 🚀 **Interactive Elements:** Live scroll progress indicator, active navspy, interactive project cards, and quick back-to-top floating control

---

## 💼 Work Experience

### 🏢 **SMART CHAKKII** — *Software Developer Intern*
*July 2026 – Present*
- Engineered and scaled backend services utilizing **Node.js, React.js, Firebase Cloud Functions, and Firestore**.
- Implemented real-time data sync across Firestore collections via event-driven Cloud Functions, reducing sync latency.
- Optimized and maintained **8+ production REST APIs** with structured error-handling, validation, and request logging.
- Collaborated using Git & GitHub in an agile development sprint environment.

### 🏢 **CODEXINTERN** — *Front-End Developer Intern*
*May 2025 – July 2025*
- Architected **20+ reusable React.js components** adhering to clean component modularity and modern React hooks.
- Integrated **10+ RESTful endpoints** using Axios, managing loading states, error boundaries, and asynchronous flows.
- Built a pixel-perfect, responsive Coding Ninjas platform clone.

---

## 🚀 Featured Projects

| Project | Live Demo | Repository | Tech Stack |
| :--- | :--- | :--- | :--- |
| **🤖 AI Website UI Reviewer** | [Live App](https://ai-ui-reviewer-swart.vercel.app) | [GitHub](https://github.com/surendaras/ai-ui-reviewer) | React, Gemini API, Playwright, Node.js |
| **💰 Expense Splitter (Splitwise)** | [Live App](https://expenses-splitter-sage.vercel.app/) | [GitHub](https://github.com/surendaras/Expenses-Splitter) | React, Tailwind, Framer Motion, Context API |
| **🛒 Cartify (Role-Based E-Commerce)** | — | [GitHub](https://github.com/surendaras/E-commerce) | React, Node.js, JWT, Context API |
| **🎓 Coding Ninjas Clone** | — | [GitHub](https://github.com/surendaras/coding-ninja-clone) | React, CSS3, Axios, Component Library |
| **⚙️ Workforce Task Automation** | — | [GitHub](https://github.com/surendaras/task-management-platform) | React, REST APIs, Microservices, JIRA |

---

## 🛠️ Tech Stack & Skills

- **Frontend:** React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Material UI, Framer Motion
- **Backend & Cloud:** Node.js, Express.js, Firebase Cloud Functions, RESTful APIs, JWT Auth
- **AI & Automation:** OpenAI API, Google Gemini API, Playwright Browser Automation, Prompt Engineering
- **Databases & Tools:** Firestore, MySQL, Git, GitHub, Postman, VS Code, Vite

---

## 📁 Modular Directory Structure

The project follows a scalable, **feature-based component modularity** where each component contains its own markup, styling, and entrypoint:

```
portfolio/
├── Portfolio/
│   ├── public/
│   │   ├── favicon.png
│   │   └── resume.pdf
│   ├── src/
│   │   ├── assets/                     # Project screenshots, avatars & mockups
│   │   ├── components/                 # Modular Feature Folders
│   │   │   ├── About/
│   │   │   │   ├── About.jsx
│   │   │   │   ├── About.css
│   │   │   │   └── index.js
│   │   │   ├── Certification/
│   │   │   │   ├── Certification.jsx
│   │   │   │   ├── Certification.css
│   │   │   │   └── index.js
│   │   │   ├── Contact/
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── Contact.css
│   │   │   │   └── index.js
│   │   │   ├── Experience/
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── Experience.css
│   │   │   │   └── index.js
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Footer.css
│   │   │   │   └── index.js
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Header.css
│   │   │   │   └── index.js
│   │   │   ├── Home/
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── Home.css
│   │   │   │   └── index.js
│   │   │   ├── Projects/
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── Projects.css
│   │   │   │   └── index.js
│   │   │   ├── Resume/
│   │   │   │   ├── Resume.jsx
│   │   │   │   ├── Resume.css
│   │   │   │   └── index.js
│   │   │   ├── ScrollToTop/
│   │   │   │   ├── ScrollToTop.jsx
│   │   │   │   └── index.js
│   │   │   ├── Skills/
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── Skills.css
│   │   │   │   └── index.js
│   │   │   └── index.js                # Centralized Re-export Barrel
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css                   # Global theme tokens & base styles
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

---

## ⚡ Quick Start & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/surendaras/portfolio.git
cd portfolio/Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📊 Summary Metrics

- 💼 **2+ Industry Internships** (Smart Chakkii & CodeXintern)
- ⚛️ **20+ Modular Reusable Components**
- ⚡ **8+ Production REST APIs** Optimized
- 🚀 **5+ Deployed Web & AI Applications**
- 🎓 **B.Tech CSE (2022 – 2026)** | CGPA: 7.5/10

---

## 📬 Contact & Connect

- 📧 **Email:** [surendrak61002@gmail.com](mailto:surendrak61002@gmail.com)
- 💻 **GitHub:** [@surendaras](https://github.com/surendaras)
- 🔗 **LinkedIn:** [surendrakumar61002](https://www.linkedin.com/in/surendrakumar61002/)
- 🌐 **Portfolio:** [sk-portfolio-s2.vercel.app](https://sk-portfolio-s2.vercel.app/)

---

Made with ❤️ by **Surendra Kumar**
