import type { Metadata } from "next";
import "../app/globals.css"

export const metadata: Metadata = {
    title: "Simon Caillieret | CV Éco-conçu",
    description: "CV de Simon Caillieret, Développeur BUT Informatique. Site éco-responsable.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="antialiased">
        {/* Pas de className sur le body car nous avons défini
        'sans' comme police par défaut dans tailwind.config.ts
      */}
        <body className="bg-eco-bg text-cv-paper min-h-screen">
        {children}
        </body>
        </html>
    );
}