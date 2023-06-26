/** @type {import('tailwindcss').Config} */

import { multiThemePlugin } from "./plugins/themePlugin";

// import themes1 from "./plugins/themes1.json";
// import themes1 from "./plugins/themes2.json";
import { theme } from "./plugins/theme1";
// import { theme } from "./plugins/theme2";

const getTheme = () => {
  return theme;
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    multiThemePlugin({
      colorTheme: getTheme(),
    }),
  ],
};
