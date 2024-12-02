/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			main: ["var(--font-modern-gothic)"]
  		},
  		colors: {
  			primary: {
  				'400': '#A8E9EF',
  				'500': '#76848F',
  				'600': '#5F5F5F',
  				'700': '#3C4F5F',
  				'800': '#283139'
  			},
  			light: {
  				'200': '#FEF9F3',
  				'300': '#F3F3F3'
  			},
  			dark: '#1A1A1A'
  		},
  		borderRadius: {
  			custom: '4px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			scroll: 'scroll 40s linear infinite'
  		},
  		keyframes: {
  			scroll: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
