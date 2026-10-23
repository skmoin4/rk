import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy base — tuned to sit under the logo's blue/green.
        ink: {
          DEFAULT: "#061522",
          soft: "#0A2032",
        },
        navy: {
          950: "#07192A",
          900: "#0B2236",
          800: "#102C44",
          700: "#173A57",
          600: "#22506F",
        },
        // Cool neutral scale
        slate: {
          50: "#F4F8FB",
          100: "#E8F0F6",
          200: "#D4E1EC",
          300: "#B2C6D7",
          400: "#83A0B6",
          500: "#5C7B93",
          600: "#445E72",
          700: "#344859",
          800: "#273645",
          900: "#1A2531",
        },
        // Brand BLUE (from logo)
        brand: {
          50: "#ECF7FD",
          100: "#D0ECFA",
          200: "#A3D8F3",
          300: "#6CBFEA",
          400: "#36A2DC",
          500: "#1388C6",
          600: "#0D6CA4",
          700: "#0E577F",
          800: "#114A69",
          900: "#0C3448",
          DEFAULT: "#1388C6",
        },
        // Brand GREEN (from logo)
        leaf: {
          50: "#EFFAEA",
          100: "#DAF3CE",
          200: "#B9E7A4",
          300: "#90D773",
          400: "#6CC44D",
          500: "#54B23C",
          600: "#43942F",
          700: "#357427",
          800: "#2D5D23",
          900: "#264E20",
          DEFAULT: "#54B23C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1388C6 0%, #2AA0A0 50%, #54B23C 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #36A2DC 0%, #6CC44D 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(6,21,34,0.05), 0 14px 32px -14px rgba(6,21,34,0.16)",
        "card-hover": "0 2px 6px rgba(6,21,34,0.08), 0 30px 60px -18px rgba(19,136,198,0.28)",
        glow: "0 0 0 1px rgba(19,136,198,0.15), 0 18px 48px -12px rgba(19,136,198,0.35)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "mesh-pan": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-3%,2%) scale(1.08)" },
        },
        "dash-flow": {
          to: { "stroke-dashoffset": "-1000" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "spin-slow": "spin-slow 40s linear infinite",
        marquee: "marquee 36s linear infinite",
        float: "float 7s ease-in-out infinite",
        "mesh-pan": "mesh-pan 18s ease-in-out infinite",
        "dash-flow": "dash-flow 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
