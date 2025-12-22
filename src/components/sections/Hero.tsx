import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Car } from 'lucide-react';
import { CV_DATA } from '../../data/cv';

export const Hero = () => {
    const { profil } = CV_DATA;

    return (
        <header className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-20 pb-16 border-b border-eco-border/60">
            {/* Logo SC avec effet de rotation au survol */}
            <div className="relative group shrink-0">
                <div className="w-32 h-32 bg-white border border-eco-border rounded-2xl flex items-center justify-center shadow-sm rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <span className="font-bold text-4xl text-cv-accent font-serif">SC</span>
                </div>
                <div className="absolute inset-0 bg-cv-accent/5 rounded-2xl -rotate-3 -z-10" />
            </div>

            <div className="flex-1 text-center md:text-left">
                <div className="mb-8">
                    {/* Nom principal */}
                    <h1 className="text-5xl md:text-6xl font-bold text-cv-ink tracking-tighter mb-4">
                        {profil.name}
                    </h1>

                    {/* Bloc Titre + Statut (Même DA) */}
                    <div className="space-y-1">
                        <h2 className="text-lg md:text-xl text-cv-accent font-medium font-mono uppercase tracking-widest">
                            {profil.role}
                        </h2>
                        <p className="text-xs md:text-sm text-cv-muted font-mono uppercase tracking-[0.15em] font-semibold">
                            {profil.status}
                        </p>
                    </div>
                </div>

                {/* Grille d'infos de contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12 text-sm text-cv-muted border-t border-eco-border/40 pt-8">
                    <a href={`mailto:${profil.email}`} className="flex items-center gap-3 hover:text-cv-accent transition-colors">
                        <Mail size={16} strokeWidth={1.5} /> {profil.email}
                    </a>
                    <div className="flex items-center gap-3">
                        <Phone size={16} strokeWidth={1.5} /> {profil.phone}
                    </div>
                    <a href={`https://github.com/${profil.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-cv-accent transition-colors">
                        <Github size={16} strokeWidth={1.5} /> GitHub/{profil.github}
                    </a>
                    <a href="https://www.linkedin.com/in/simon-caillieret-a8996229a/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-cv-accent transition-colors">
                        <Linkedin size={16} strokeWidth={1.5} /> {profil.linkedin}
                    </a>
                    <div className="flex items-center gap-3">
                        <MapPin size={16} strokeWidth={1.5} /> {profil.location}
                    </div>
                    <div className="flex items-center gap-3">
                        <Car size={16} strokeWidth={1.5} /> {profil.details.join(" • ")}
                    </div>
                </div>
            </div>
        </header>
    );
};