# Sushmita Kundu - Portfolio Website

A modern, minimalist portfolio website showcasing my journey as a Computer Science Engineering student and Frontend Developer. Built with React, TypeScript, and Tailwind CSS v4.

## 🌟 Features

- **Modern Design**: Clean, minimalist interface with a soft green background and vibrant pink accents
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth micro-interactions using Framer Motion
- **Performance Optimized**: Built with Vite for fast loading and optimal bundle sizes
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (motion/react)
- **Build Tool**: Vite
- **Icons**: Lucide React
- **UI Components**: Custom ShadCN/UI components
- **Notifications**: Sonner
- **Forms**: React Hook Form

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sushmitakundu/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (ShadCN)
│   ├── figma/          # Figma-specific components
│   └── hooks/          # Custom React hooks
├── styles/             # CSS and styling files
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🎨 Design System

- **Primary Color**: Pink (#FF4DA6)
- **Secondary Color**: Light Pink (#FF85B5)
- **Background**: Soft Light Green (#E9FBE7)
- **Typography**: Inter font family
- **Shadows**: Subtle with pink tint
- **Border Radius**: Rounded corners (1rem default)

## 📱 Sections

- **Hero**: Introduction with animated typing text
- **About**: Personal background and interests
- **Experience**: Education timeline and projects
- **Projects**: Featured work with modal previews
- **Skills**: Interactive skill badges with categories
- **Contact**: Contact form with email copy functionality

## 🌐 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Deploy!

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

