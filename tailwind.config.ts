import type { Config } from "tailwindcss";

const config: Config = {
    // ICI : On ajoute des chemins plus larges pour être sûr de trouver tes fichiers
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/data/**/*.ts",
    ],
    theme: {
        extend: {
            colors: {
                eco: {
                    bg: "#F9F9F7",      // Blanc cassé papier
                    card: "#FFFFFF",    // Blanc pur
                    border: "#E5E5E0",  // Bordure grise
                },
                cv: {
                    ink: "#1F1F1F",     // Gris anthracite (Texte)
                    muted: "#666666",   // Gris moyen
                    accent: "#B08D55",  // Doré
                }
            },
            fontFamily: {
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