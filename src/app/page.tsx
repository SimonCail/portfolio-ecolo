import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { CV_DATA } from '../data/cv';
import { Code2, GraduationCap, Leaf, Server } from 'lucide-react';

export default function Home() {
  return (
      <div className="min-h-screen bg-eco-bg text-cv-ink font-sans selection:bg-cv-accent/20 selection:text-cv-ink">

        {/* Bandeau Eco-Index Minimaliste */}
        <div className="w-full border-b border-eco-border py-1 px-4 text-[10px] flex justify-between items-center text-cv-muted font-mono bg-white/50 backdrop-blur-sm">
            <span className="flex items-center gap-1">
               <Leaf size={10} className="text-green-600"/> ECO-DESIGNED
            </span>
          <span>{CV_DATA.stats.weight} • 0.01g CO2</span>
        </div>

        <main className="max-w-4xl mx-auto p-6 md:p-12 md:pt-12">

          <Hero />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">

            {/* Colonne Principale (Gauche sur Desktop) */}
            <div className="space-y-12">
              <Experience />

              <section>
                <SectionTitle title="Formation" icon={GraduationCap} />
                <div className="grid gap-4">
                  {CV_DATA.education.map((edu, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-lg border border-eco-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-cv-ink">{edu.degree}</h3>
                          <span className="text-xs font-mono text-cv-muted bg-eco-bg px-2 py-0.5 rounded">{edu.year}</span>
                        </div>
                        <div className="text-sm text-cv-accent font-medium mb-2">{edu.school}</div>
                        <p className="text-xs text-cv-muted leading-relaxed">{edu.details}</p>
                      </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar (Compétences & Infos) */}
            <aside className="lg:block space-y-10">
              <div className="sticky top-8">
                <SectionTitle title="Compétences" icon={Code2} />

                <div className="space-y-8">
                  {CV_DATA.skills.map((skillGroup, idx) => (
                      <div key={idx}>
                        <h4 className="text-[11px] font-bold text-cv-muted uppercase tracking-wider mb-3 border-l-2 border-cv-accent pl-2">
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

                {/* Centres d'intérêts */}
                <div className="mt-10 pt-8 border-t border-eco-border">
                  <h4 className="text-[11px] font-bold text-cv-muted uppercase tracking-wider mb-3">Intérêts</h4>
                  <p className="text-sm text-cv-ink/80 leading-relaxed">
                    {CV_DATA.hobbies.join(" • ")}
                  </p>
                </div>

                {/* Note technique discrète */}
                <div className="mt-12 p-3 rounded bg-green-50 border border-green-100 text-[10px] text-green-800">
                  <div className="flex items-center gap-1 mb-1 font-bold">
                    <Server size={10} />
                    <span>Hébergement Vert</span>
                  </div>
                  <p className="opacity-80">
                    Optimisé pour réduire l'empreinte carbone.
                  </p>
                </div>

              </div>
            </aside>
          </div>

          <footer className="mt-24 pt-8 border-t border-eco-border text-center text-xs text-cv-muted">
            <p>© 2024 Simon Caillieret — BUT Informatique Lens</p>
          </footer>
        </main>
      </div>
  );
}