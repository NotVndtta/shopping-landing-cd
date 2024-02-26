/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'ph': '320px',
        'tb': '792px',
        'dp': '1280px'
      },
      colors: {
        'custom-black': '#27272A',
        'custom-gray': '#696969',
        'border-color': '#E5E7EB'
      },
      fontSize: {
        '32': '32px',
      },
      width: {
        '38': '38%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    borderColor: ['hover', 'focus'],
 },
  plugins: [],
};
