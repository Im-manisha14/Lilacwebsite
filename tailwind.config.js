/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#F9F8F6',
        'bg-soft': '#F3EEE8', 
        'text-primary': '#2C3A35',
        'accent': '#7A8E7A',
        'accent-warm': '#C4876B',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      transitionTimingFunction: {
        'signature': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
