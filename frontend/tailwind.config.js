/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 5s linear infinite",
        marquee2: "marquee2 5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      'dmSans-regular': ['DmSans-Regular', 'sans-serif'],
      'dmSans-medium': ['DmSans-Medium', 'sans-serif'],
      'dmSans-bold': ['DmSans-Bold', 'sans-serif'],
    },
    colors:
    {
      'orange': '#FF5052',
      'yellow-deep': '#FFB802',
      'yellow-light': '#FFDC02',
      'white': '#FFF2E8',
      'black': '#000000',
    },
  },


  plugins: [],
};
