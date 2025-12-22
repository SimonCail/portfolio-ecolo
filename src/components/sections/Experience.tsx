import React from 'react';
import { Briefcase, Github } from 'lucide-react';
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
                        <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-eco-card border-2 border-eco-border group-hover:border-cv-accent transition-colors" />

                        <div className="group/main cursor-default">
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                                <h3 className="text-lg font-bold text-cv-ink group-hover/main:text-cv-accent transition-colors">
                                    {exp.role}
                                </h3>
                                <span className="text-xs font-mono text-cv-muted">{exp.period}</span>
                            </div>
                            <div className="text-sm text-cv-accent/80 mb-2 font-medium">{exp.company}</div>

                            {!exp.subProjects && (
                                <>
                                    <p className="text-cv-muted text-sm leading-relaxed mb-3 text-justify">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags?.map((tag: string) => <Badge key={tag}>{tag}</Badge>)}
                                    </div>
                                </>
                            )}
                        </div>

                        {exp.subProjects && (
                            <div className="space-y-2 mt-4">
                                <p className="text-cv-muted text-sm mb-4">
                                    {exp.description}
                                </p>
                                {exp.subProjects.map((sub: any, index: number) => (
                                    <div key={index} className="group/link">
                                        {sub.link ? (
                                            <a href={sub.link} target="_blank" rel="noopener noreferrer" className="block project-card">
                                                <div className="absolute top-3 right-3 text-cv-muted group-hover/link:text-cv-accent transition-colors">
                                                    <Github size={18} />
                                                </div>
                                                <h4 className="project-title mb-1 pr-8">{sub.title}</h4>
                                                <p className="text-cv-muted text-xs leading-relaxed mb-2 pr-4">{sub.description}</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {sub.tags?.map((tag: string) => <Badge key={tag}>{tag}</Badge>)}
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="project-card cursor-default">
                                                <h4 className="project-title mb-1">{sub.title}</h4>
                                                <p className="text-cv-muted text-xs leading-relaxed mb-2">{sub.description}</p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {sub.tags?.map((tag: string) => <Badge key={tag}>{tag}</Badge>)}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};