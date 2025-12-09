import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { CV_DATA } from '../../data/cv';

export const Hero = () => {
    const { profile } = CV_DATA;

    return (
        <header className="flex flex-col md:flex-row gap-8 items-start mb-12">
            {/* Avatar CSS Pur (Poids : ~100 octets vs 50kb pour une image) */}
            <div className="w-24 h-24 bg-eco-card border-2 border-cv-accent rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-cv-accent/5">
                <span className="font-bold text-3xl text-cv-paper">SC</span>
            </div>

            <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-cv-paper tracking-tight mb-2">
                    {profile.name}
                </h1>
                <h2 className="text-xl text-cv-accent font-medium mb-4 font-mono">
                    {profile.role}
                </h2>

                {/* Statut avec animation CSS native (très léger) */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-eco-card border border-eco-border text-xs text-cv-muted mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
                    {profile.status}
                </div>

                {/* Liens de contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-cv-muted">
                    <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-cv-accent transition-colors">
                        <Mail size={14} /> {profile.email}
                    </a>
                    <div className="flex items-center gap-2">
                        <Phone size={14} /> {profile.phone}
                    </div>
                    <a href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cv-accent transition-colors">
                        <Github size={14} /> GitHub/{profile.github}
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:text-cv-accent transition-colors">
                        <Linkedin size={14} /> {profile.linkedin}
                    </a>
                    <div className="flex items-center gap-2">
                        <MapPin size={14} /> {profile.location}
                    </div>
                </div>
            </div>
        </header>
    );
};