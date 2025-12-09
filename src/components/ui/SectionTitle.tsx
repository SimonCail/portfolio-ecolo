import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
    title: string;
    icon?: LucideIcon;
}

export const SectionTitle = ({ title, icon: Icon }: Props) => (
    <h2 className="flex items-center gap-3 text-lg font-bold text-cv-paper mb-6 border-b border-eco-border pb-2 mt-8">
        {Icon && <Icon size={20} className="text-cv-accent" />}
        <span className="tracking-wide uppercase">{title}</span>
    </h2>
);