import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { CV_DATA } from '../data/cv';
import { Code2, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
      <div className="min-h-screen bg-eco-bg text-cv-ink font-sans selection:bg-cv-accent/20 selection:text-cv-ink">
        <main className="max-w-6xl mx-auto p-6 md:px-12 md:py-20">
          <Hero />
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
            <div className="space-y-20">
              <Experience />

              <section>
                <SectionTitle title="Formation" icon={GraduationCap} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CV_DATA.education.map((edu, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl border border-eco-border shadow-sm hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-cv-ink">{edu.degree}</h3>
                          <span className="text-[10px] font-mono text-cv-muted bg-eco-bg px-2 py-0.5 rounded border border-eco-border">{edu.year}</span>
                        </div>
                        <div className="text-sm text-cv-accent font-semibold mb-3">{edu.school}</div>
                        <p className="text-xs text-cv-muted leading-relaxed">{edu.details}</p>
                      </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-12">
              <div className="sticky top-12">
                <div className="p-8 bg-white/50 rounded-2xl border border-eco-border/50">
                  <SectionTitle title="Compétences" icon={Code2} />
                  <div className="space-y-10">
                    {CV_DATA.skills.map((skillGroup, idx) => (
                        <div key={idx}>
                          <h4 className="text-[12px] font-bold text-cv-muted uppercase tracking-[0.2em] mb-4 border-l-2 border-cv-accent pl-3">
                            {skillGroup.category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill) => (
                                <Badge key={skill}>{skill}</Badge>
                            ))}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 px-4">
                  <h4 className="text-[12px] font-bold text-cv-muted uppercase tracking-[0.2em] mb-4">Centres d'intérêts</h4>
                  <p className="text-[14px] text-cv-ink/70 leading-relaxed">
                    {CV_DATA.hobbies.join(" • ")}
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <footer className="mt-32 pt-12 border-t border-eco-border text-center text-[10px] tracking-widest uppercase text-cv-muted">
            <p>2025 Simon Caillieret — BUT Informatique Lens</p>
          </footer>
        </main>
      </div>
  );
}