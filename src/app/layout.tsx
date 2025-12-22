import type { Metadata } from "next";
import "../app/globals.css"

export const metadata: Metadata = {
    title: "Simon Caillieret | CV",
    description: "CV de Simon Caillieret.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="antialiased">
        <body className="bg-eco-bg text-cv-ink min-h-screen">
        {children}
        </body>
        </html>
    );
}