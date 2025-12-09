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
                    // L'article a la classe "group". Si on survole n'importe quoi dedans (y compris les subProjects),
                    // le group-hover s'active pour les éléments qui dépendent de "group" (comme le petit point).
                    <article key={exp.id} className="relative group">

                        {/* Le point de timeline : il réagit au survol de tout l'article (group-hover) */}
                        <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-eco-card border-2 border-eco-border group-hover:border-cv-accent transition-colors" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            {/* Titre principal : réagit au survol de tout l'article */}
                            <h3 className="text-lg font-bold text-cv-paper group-hover:text-cv-accent transition-colors">
                                {exp.role}
                            </h3>
                            <span className="text-xs font-mono text-cv-muted">{exp.period}</span>
                        </div>

                        <div className="text-sm text-cv-accent/80 mb-2 font-medium">{exp.company}</div>

                        {exp.subProjects ? (
                            <div className="space-y-4 mt-2">
                                <p className="text-cv-muted text-sm mb-3">{exp.description}</p>
                                {exp.subProjects.map((sub: any, index: number) => (
                                    // AJOUT DE 'group/sub' : On crée un sous-groupe spécifique pour ce bloc
                                    <div key={index} className="relative pl-4 border-l-2 border-eco-border hover:border-cv-accent/50 transition-colors group/sub">

                                        {/* AJOUT DE 'group-hover/sub:text-cv-accent' :
                                            Le titre change de couleur SEULEMENT quand on survole ce sous-groupe précis */}
                                        <h4 className="text-sm font-bold text-cv-ink mb-1 group-hover/sub:text-cv-accent transition-colors">
                                            {sub.title}
                                        </h4>

                                        <p className="text-cv-muted text-xs leading-relaxed mb-2">
                                            {sub.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {sub.tags?.map((tag: string) => (
                                                <Badge key={tag}>{tag}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                <p className="text-cv-muted text-sm leading-relaxed mb-3 text-justify">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags?.map((tag: string) => <Badge key={tag}>{tag}</Badge>)}
                                </div>
                            </>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};