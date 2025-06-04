# Sai Ram Makkapati - Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-13.5.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive portfolio website built with Next.js 13 (App Router), TypeScript, and React. Showcase your projects, blog posts, and professional information in a clean, minimalist design.

## ✨ Features

- **Modern UI/UX** - Clean, responsive design that works on all devices
- **Light/Dark Mode** - Automatically adapts to system preferences
- **Performance Optimized** - Built with Next.js for optimal performance and SEO
- **Blog System** - Markdown-based blog system for easy content management
- **Project Showcase** - Beautiful portfolio section to display your work
- **Video Gallery** - Dedicated section for your video content
- **Contact Form** - Easy way for visitors to get in touch

## 🚀 Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules with CSS Variables
- **UI Components**: Custom built with React
- **Deployment**: [Vercel](https://vercel.com/) (Recommended)
- **Version Control**: Git & GitHub

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📂 Project Structure

```
src/app/
├── about/             # About page
├── blog/              # Blog posts
│   └── [slug]/       # Individual blog posts
├── components/        # Reusable components
│   ├── ClientButton.tsx
│   └── Navigation.tsx
├── contact/           # Contact page
├── explorations/      # Explorations/experiments
├── portfolio/         # Portfolio projects
├── videos/            # Video gallery
├── globals.css        # Global styles
├── layout.tsx         # Root layout
└── page.tsx           # Home page
```

## 🎨 Customization

1. **Update Personal Information**
   - Edit `src/app/page.tsx` for the hero section
   - Update `src/app/about/page.tsx` for your about page

2. **Add Blog Posts**
   - Create new `.mdx` files in `content/blog/`
   - Follow the existing format for frontmatter

3. **Add Projects**
   - Edit `src/app/portfolio/page.tsx`
   - Add your project details in the projects array

4. **Styling**
   - Update colors in `src/app/globals.css`
   - Modify component styles directly in their respective files

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Deployed on [Vercel](https://vercel.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ by [Your Name] • [![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fyourhandle)](https://twitter.com/yourhandle)