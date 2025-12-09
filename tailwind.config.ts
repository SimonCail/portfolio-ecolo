import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Nos couleurs Eco / CV personnalisées
                eco: {
                    bg: "#121212",      // Noir doux (OLED friendly)
                    card: "#1E1E1E",    // Gris anthracite
                    border: "#333333",  // Bordures discrètes
                },
                cv: {
                    paper: "#E8E6D9",   // Blanc cassé / Crème
                    muted: "#9CA3AF",   // Gris moyen
                    accent: "#D4AF37",  // Doré / Beige (Ta couleur d'accentuation)
                }
            },
            fontFamily: {
                // LA CLÉ DU SUCCÈS : On force les polices système.
                // Tailwind utilisera la première dispo sur l'ordi du visiteur.
                sans: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica",
                    "Arial",
                    "sans-serif"
                ],
                mono: [
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "Liberation Mono",
                    "Courier New",
                    "monospace"
                ],
            },
        },
    },
    plugins: [],
};
export default config;