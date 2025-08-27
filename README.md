# Softverse Systems Website

A modern, responsive website for Softverse Systems built with Next.js and Tailwind CSS, featuring a dark theme with orange and blue accent colors.

## Features

- **Modern Design**: Clean, professional layout with gradient effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Theme**: Elegant dark theme with custom orange and blue color scheme
- **Interactive Components**: Contact forms, newsletter subscription, and navigation
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites


1. Clone the repository:
```bash
git clone <repository-url>
cd softverse
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Build & Deploy

### Development
```bash
npm run dev          # Start development server
npm run lint         # Run ESLint
npm run build        # Build for production
npm run start        # Start production server
```

### Production Build
```bash
npm run build        # Creates optimized production build
npm run export       # Exports static files (if using static export)
```

### Deployment Options

**Vercel (Recommended)**
1. Connect your repository to Vercel
2. Deploy automatically on every push to main branch

**Netlify**
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out` (for static export) or `.next` (for SSR)

**Static Hosting**
1. Run `npm run build` 
2. Upload the `out` directory to your static hosting provider

## 🎨 Design System

The website uses a custom NeoPop-inspired design system with:

- **Colors**: Orange (#f97316) and blue (#3b82f6) brand colors
- **Typography**: Inter font with bold, uppercase styling
- **Shadows**: Characteristic 4px offset shadows
- **Components**: Custom NeoPop buttons, cards, and inputs
- **Animations**: Hover effects with transform animations

## 📁 Project Structure

```
softverse/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── NeoPopButton.tsx
│   │   ├── NeoPopCard.tsx
│   │   └── NeoPopInput.tsx
│   ├── HeroSection.tsx   # Page sections
│   ├── ServicesSection.tsx
│   └── ...
├── public/               # Static assets
├── types/                # TypeScript type definitions
└── ...
```

## 🔧 Configuration

### Environment Variables
See `.env.example` for available environment variables.

### Next.js Configuration
The `next.config.js` includes production optimizations:
- Static export configuration
- Image optimization settings
- Performance enhancements
- Bundle optimization

### Tailwind Configuration
Custom NeoPop colors and utilities are defined in `tailwind.config.js`.

## 🚀 Performance

## Customization

To modify colors, update the `tailwind.config.js` file. The main color variables are:
- `primary` - Orange color palette
- `secondary` - Blue color palette
- `dark` - Dark background colors

## Deployment

Build the project for production:

```bash
npm run build
npm start
```

The website can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

## License

This project is private and proprietary to Softverse Systems.
