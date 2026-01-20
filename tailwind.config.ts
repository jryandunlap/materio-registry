/**
 * MATERIO DESIGN SYSTEM — Tailwind Config for v0 Registry
 * 
 * This extends the default shadcn/ui Tailwind config with Materio-specific values.
 * Merge this with your registry's existing tailwind.config.js
 */

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* === COLORS (reference CSS variables from tokens.css) === */
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        /* Materio extended palette */
        materio: {
          primary: "hsl(var(--materio-primary))",       /* #001a2a navy */
          secondary: "hsl(var(--materio-secondary))",   /* #e57d6c coral */
          error: "hsl(var(--materio-error))",           /* #ff5838 */
          affirmative: "hsl(var(--materio-affirmative))", /* #16b895 teal */
          warn: "hsl(var(--materio-warn))",             /* #ffd657 yellow */
          blue: "hsl(var(--materio-blue))",             /* #5B9EF9 */
          purple: "hsl(var(--materio-purple))",         /* #390d60 */
          grey: "hsl(var(--materio-grey))",             /* #85807c */
          "grey-light": "hsl(var(--materio-grey-light))", /* #e2ded9 */
          "grey-medium": "hsl(var(--materio-grey-medium))", /* #dfdfdf */
        },
      },

      /* === TYPOGRAPHY === */
      fontFamily: {
        sans: ["var(--font-roobert)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        /* Materio type scale */
        "h1": ["36px", { lineHeight: "1.2", fontWeight: "400" }],
        "h2": ["24px", { lineHeight: "1.3", fontWeight: "400" }],
        "h3": ["18px", { lineHeight: "1.4", fontWeight: "400" }],
        "h4": ["16px", { lineHeight: "1.4", fontWeight: "400" }],
        "h5": ["14px", { lineHeight: "1.4", fontWeight: "400" }],
        "body": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "caption": ["0.9rem", { lineHeight: "1.4", fontWeight: "350" }],
        "overline": ["10px", { lineHeight: "1.4", fontWeight: "400", letterSpacing: "0.75px" }],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        /* Materio doesn't use bold for headers */
      },
      letterSpacing: {
        button: "1px",       /* Button text */
        overline: "0.75px",  /* Overline labels */
      },

      /* === BORDER RADIUS === */
      borderRadius: {
        lg: "var(--radius)",        /* 2px - Materio default */
        md: "calc(var(--radius) * 2)", /* 4px */
        sm: "var(--radius)",        /* 2px */
        /* Override shadcn defaults to be tighter */
        DEFAULT: "2px",
        button: "2px",              /* Buttons always 2px */
        card: "8px",                /* Cards get 8px */
        dialog: "8px",              /* Dialogs get 8px */
        avatar: "9999px",           /* Fully round */
        chip: "4px",                /* Status chips */
      },

      /* === SHADOWS === */
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08)",
        dialog: "0 4px 20px rgba(0,0,0,0.15)",
        dropdown: "0 4px 20px rgba(0,0,0,0.15)",
      },

      /* === SPACING (matches Materio patterns) === */
      spacing: {
        "nav": "64px",        /* Sidebar width */
        "topbar": "48px",     /* Top nav height */
        "dialog-padding": "16px",
        "card-padding": "16px",
      },

      /* === AVATAR SIZES === */
      width: {
        avatar: "30px",
        "avatar-sm": "24px",
        "avatar-lg": "40px",
      },
      height: {
        avatar: "30px",
        "avatar-sm": "24px",
        "avatar-lg": "40px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
