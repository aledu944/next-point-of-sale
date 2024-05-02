import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  },
  plugins: [
    nextui({
      themes: {
        light: {

          colors: {
            focus: '#FFA16C',
            primary: {
              DEFAULT: '#FFA16C',
              foreground: "#fff",

            }
          }
        }
      }
    }),
  ],
};
export default config;
