# Modern Developer Portfolio

A premium, high-performance developer portfolio built with React and Vite, featuring glassmorphic UI elements, smooth animations, and a responsive design.

## 🚀 Features

- **Glassmorphism Design**: Sleek, modern aesthetics with blurred backgrounds and neon accents.
- **Interactive UI**: Custom cursor, smooth scroll animations, and interactive skill cards.
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop views.
- **Modern Tech Stack**: Built with React 18+ and Vite for lightning-fast development.

## 📁 Project Structure

```text
portfolio/
├── public/              # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/          # Images, icons, and global media
│   ├── components/      # React components
│   │   ├── Layout/      # Global layout elements (Navbar, Footer, Cursor)
│   │   ├── Sections/    # Page sections (Hero, About, Projects, Skills, Contact)
│   │   └── UI/          # Reusable UI elements (Buttons, Cards, Modals)
│   ├── data/            # Static data files (projectsData.js, profileInfo.js)
│   ├── hooks/           # Custom React hooks (useScroll, useTypewriter)
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles for the App component
│   ├── index.css        # Global CSS variables and base styles
│   └── main.jsx         # Application entry point
├── .gitignore           # Git ignore rules
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Vanilla CSS (Custom Properties / Variables)
- **Icons**: Lucide React / FontAwesome
- **Animations**: CSS Keyframes / Framer Motion (optional)
- **Build Tool**: Vite

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 📄 License

This project is licensed under the MIT License.
