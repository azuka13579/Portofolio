import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [daisyui],

  daisyui: {
    themes: ["light"], // Use 'light' theme explicitly (default is also 'light')
  },
};
