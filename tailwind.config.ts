import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/data/**/*.ts",
    ],
    theme: {
        extend: {
            colors: {
                eco: {
                    bg: "#F9F9F7",
                    card: "#FFFFFF",
                    border: "#E5E5E0",
                },
                cv: {
                    ink: "#1F1F1F",
                    muted: "#666666",
                    accent: "#B08D55",
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