import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    // Pour l'éco-conception, on veut que Next.js optimise les images ou qu'on gère le format WebP/AVIF nous-mêmes.
    // On retire la ligne "unoptimized: true" qui tue les performances.
    images: {
        // Si tu déploies sur GitHub Pages ou un hébergeur statique simple sans Node.js,
        // utilise un loader personnalisé ou optimise tes images en amont (recommandé pour l'écologie).
    },
};

export default nextConfig;