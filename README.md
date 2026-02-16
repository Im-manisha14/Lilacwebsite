# Lilac Template - Therapy Website Clone

A pixel-perfect clone of the [Lilac Template](https://lilac-template.squarespace.com/) homepage built with **Next.js** and **Tailwind CSS**.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Google Fonts** - Outfit + Inter

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.js        # Root layout with fonts
│   └── page.js          # Homepage composition
├── components/
│   ├── Header.js        # Fixed navigation header
│   ├── HeroSection.js   # Hero with arch image
│   ├── FulfillingLifeSection.js
│   ├── SpecialtiesSection.js
│   ├── NotAloneSection.js
│   ├── AboutSection.js
│   ├── FAQSection.js
│   ├── ProfessionalBackgroundSection.js
│   ├── CTASection.js
│   └── Footer.js
├── public/images/       # Image assets
└── tailwind.config.js
```

## Adding Images

Replace the gradient placeholders in each component with actual images by:

1. Adding image files to `public/images/`
2. Using the Next.js `<Image>` component with `src="/images/your-image.jpg"`
