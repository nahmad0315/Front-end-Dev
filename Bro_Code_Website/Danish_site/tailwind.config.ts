import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      scrollBehavior: {
        smooth: 'smooth',
      },
      fontFamily: {
        logo: ["Syne", "sans-serif"],
        heading: ['Lato', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        button: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        logo: ["42px", "50px"],
        smallLogo: ["22px", "24px"],
        heading: ['24px', '1.2'],
        body: ['16px', 'normal'],
        navlink: ['20px', '1px'],
        button: ['16px', '24px'],
        
        subtitle: ["24px", "29px"],
        title: ["62px", "1"],
        boldTitle: ["65px", "1"],
        paragraph: ["16px", "24px"],

        featureTitle: ["38px", "42px"],
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        textPrimary: 'hsl(var(--text-primary))',
        backgroundHero: "hsl(var(--background-hero))",
      },
      height: {
        navbar: 'var(--navbar-height)',
        headerStrip: 'var(--header-strip-height)',
      },
      width: {
        button: 'var(--button-width)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
