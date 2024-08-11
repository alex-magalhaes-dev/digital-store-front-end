/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '@tablet': '40rem',
        '@laptop': '64rem',
        '@desktop': '80rem',
      },
      fontFamily: {
        'title': ['var(--font-title)', 'sans-serif'],
        'body': ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        'grid': '76.5rem'
      },
      colors: {
        "brand-dark-gray-100": "#1f1f1f",
        "brand-dark-gray-200": "#474747",
        "brand-dark-gray-300": "#666666",

        "brand-light-gray-100": "#8f8f8f",
        "brand-light-gray-200": "#cccccc",
        "brand-light-gray-300": "#f5f5f5",

        "brand-primary": "#c92071",
        "brand-secondary": "#b5b6f2",
        "brand-tertiary": "#991956",

        "brand-error": "#ee4266",
        "brand-success": "#52ca76",
        "brand-warning": "#f6aa1c",
        "brand-white": "#ffffff",

        "brand-yellow-default": "#FFB31F",
        "brand-yellow-dark": "#CF8900",

        "brand-cyan-lighter": "#D8E3F2"
      },
    },
  },
  plugins: [],
}