import React from 'react';
import {Mail, Linkedin, Github, MapPin, Phone, Car} from 'lucide-react';
import { CV_DATA } from '../../data/cv';

export const Hero = () => {
    const { profil } = CV_DATA;

    return (
        <header className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-16 border-b border-eco-border pb-12">
            <div className="w-28 h-28 bg-white border-4 border-cv-accent/20 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <span className="font-bold text-3xl text-cv-accent font-serif">SC</span>
            </div>

            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-cv-ink tracking-tight mb-2">
                    {profil.name}
                </h1>
                <h2 className="text-xl text-cv-accent font-medium mb-4 font-mono">
                    {profil.role}
                </h2>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-xs text-green-700 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                    </span>
                    {profil.status}
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm text-cv-muted">
                    <a href={`mailto:${profil.email}`} className="flex items-center gap-2 hover:text-cv-accent transition-colors">
                        <Mail size={14} /> {profil.email}
                    </a>
                    <div className="flex items-center gap-2">
                        <Phone size={14} /> {profil.phone}
                    </div>
                    <a href={`https://github.com/${profil.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cv-accent transition-colors">
                        <Github size={14} /> GitHub/{profil.github}
                    </a>
                    <a href="https://www.linkedin.com/in/simon-caillieret-a8996229a/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cv-accent transition-colors">
                        <Linkedin size={14} /> {profil.linkedin}
                    </a>
                    <div className="flex items-center gap-2">
                        <MapPin size={14} /> {profil.location}
                    </div>
                    <div className="flex items-center gap-2">
                        <Car size={14} />
                        <span>{profil.details.join(" • ")}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};