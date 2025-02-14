import type { Config } from "tailwindcss"; // Import the Config type
import aspectRatio from "@tailwindcss/aspect-ratio"; // Import the aspectRatio plugin
import colors from "tailwindcss/colors"; // Import Tailwind's default colors

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        ss: 'linear-gradient(45deg, #F0F9FF, #E3F2FD, #E0F7FA, #E8F5E9, #FFF8E1, #FEF6E4)',
        sunset: `linear-gradient(145deg, ${colors.red[500]} 0%, ${colors.orange[500]} 100%)`,
        poppy: `linear-gradient(145deg, ${colors.rose[400]} 0%, ${colors.red[500]} 100%)`,
        rosebud: `linear-gradient(145deg, ${colors.pink[500]} 0%, ${colors.rose[500]} 100%)`,
        sunshine: `linear-gradient(145deg, ${colors.amber[200]} 0%, ${colors.yellow[400]} 100%)`,
        gold: `linear-gradient(145deg, ${colors.amber[200]} 0%, ${colors.yellow[500]} 100%)`,
        twilight: `linear-gradient(145deg, ${colors.amber[500]} 0%, ${colors.pink[500]} 100%)`,
        powder: `linear-gradient(145deg, ${colors.violet[200]} 0%, ${colors.pink[200]} 100%)`,
        holly: `linear-gradient(145deg, ${colors.blue[200]} 0%, ${colors.cyan[200]} 100%)`,
        northernLights: `linear-gradient(145deg, ${colors.teal[200]} 0%, ${colors.teal[500]} 100%)`,
        rawGreen: `linear-gradient(145deg, ${colors.lime[400]} 0%, ${colors.lime[500]} 100%)`,
        lime: `linear-gradient(145deg, ${colors.teal[400]} 0%, ${colors.yellow[200]} 100%)`,
        nemesia: `linear-gradient(145deg, ${colors.emerald[400]} 0%, ${colors.cyan[400]} 100%)`,
        snowflake: `linear-gradient(145deg, ${colors.indigo[400]} 0%, ${colors.cyan[400]} 100%)`,
        blueBird: `linear-gradient(145deg, ${colors.cyan[500]} 0%, ${colors.blue[500]} 100%)`,
        blueprint: `linear-gradient(145deg, ${colors.indigo[500]} 0%, ${colors.blue[500]} 100%)`,
        salvia: `linear-gradient(145deg, ${colors.blue[600]} 0%, ${colors.violet[600]} 100%)`,
        heartsease: `linear-gradient(145deg, ${colors.fuchsia[600]} 0%, ${colors.pink[600]} 100%)`,
        amaranthus: `linear-gradient(145deg, ${colors.fuchsia[600]} 0%, ${colors.purple[600]} 100%)`,
        candy: `linear-gradient(145deg, ${colors.fuchsia[500]} 0%, ${colors.pink[500]} 100%)`,
        verbena: `linear-gradient(145deg, ${colors.violet[500]} 0%, ${colors.purple[500]} 100%)`,
        clematis: `linear-gradient(145deg, ${colors.violet[600]} 0%, ${colors.indigo[600]} 100%)`,
        hibiscus: `linear-gradient(145deg, ${colors.purple[500]} 0%, ${colors.purple[900]} 100%)`,
        clearNight: `linear-gradient(145deg, ${colors.blue[800]} 0%, ${colors.indigo[900]} 100%)`,
        clay: `linear-gradient(145deg, ${colors.neutral[300]} 0%, ${colors.stone[400]} 100%)`,
        soil: `linear-gradient(145deg, ${colors.stone[500]} 0%, ${colors.stone[700]} 100%)`,
        silver: `linear-gradient(145deg, ${colors.slate[300]} 0%, ${colors.slate[500]} 100%)`,
        firTree: `linear-gradient(145deg, ${colors.emerald[500]} 0%, ${colors.emerald[900]} 100%)`,
        metal: `linear-gradient(145deg, ${colors.slate[500]} 0%, ${colors.slate[800]} 100%)`,
        darkness: `linear-gradient(145deg, ${colors.slate[100]} 0%, ${colors.slate[200]} 100%)`,
      },
      keyframes: {
        'gradient-text-animation': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-text-15s': 'gradient-text-animation 15s ease infinite',
        'gradient-text-20s': 'gradient-text-animation 20s ease infinite',
        'gradient-text-25s': 'gradient-text-animation 25s ease infinite',
        'gradient-text-30s': 'gradient-text-animation 30s ease infinite',
        'gradient-text-35s': 'gradient-text-animation 35s ease infinite',
      },
      backgroundSize: {
        '400%': '400%',
      },
    },
  },
  plugins: [aspectRatio], // Use the aspectRatio plugin
};

export default config satisfies Config;
