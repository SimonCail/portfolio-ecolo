import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
    title: string;
    icon?: LucideIcon;
}

export const SectionTitle = ({ title, icon: Icon }: Props) => (
    <h2 className="flex items-center gap-3 text-lg font-bold text-cv-ink mb-6 pb-2 border-b-2 border-eco-border">
        {Icon && <Icon size={20} className="text-cv-accent" />}
        <span className="tracking-wide uppercase text-sm md:text-base">{title}</span>
    </h2>
);