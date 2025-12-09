import React from 'react';
import { Briefcase } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { Badge } from '../ui/Badge';
import { CV_DATA } from '../../data/cv';

export const Experience = () => {
    return (
        <section>
            <SectionTitle title="Expériences" icon={Briefcase} />
            <div className="space-y-8 border-l border-eco-border ml-2 pl-6">
                {CV_DATA.experience.map((exp) => (
                    <article key={exp.id} className="relative group">
                        {/* Timeline dot */}
                        <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-eco-card border-2 border-eco-border group-hover:border-cv-accent transition-colors" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-lg font-bold text-cv-paper group-hover:text-cv-accent transition-colors">
                                {exp.role}
                            </h3>
                            <span className="text-xs font-mono text-cv-muted">{exp.period}</span>
                        </div>

                        <div className="text-sm text-cv-accent/80 mb-2 font-medium">{exp.company}</div>
                        <p className="text-cv-muted text-sm leading-relaxed mb-3 text-justify">
                            {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {exp.tags?.map(tag => <Badge key={tag}>{tag}</Badge>)}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};