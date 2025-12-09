import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Badge } from '../components/ui/Badge';
import { CV_DATA } from '../data/cv';
import { Code2, GraduationCap, Leaf, Server } from 'lucide-react';

export default function Home() {
  return (
      <div className="min-h-screen bg-eco-bg text-cv-muted font-sans selection:bg-cv-accent selection:text-eco-bg">

        {/* Bandeau Eco-Index */}
        <div className="w-full bg-black/20 border-b border-eco-border py-1 px-4 text-[10px] flex justify-between items-center text-gray-600 font-mono">
        <span className="flex items-center gap-1">
           <Leaf size={10} className="text-green-600"/> ECO-DESIGNED
        </span>
          <span>{CV_DATA.stats.weight} • 0.01g CO2</span>
        </div>

        <main className="max-w-4xl mx-auto p-6 md:p-12 md:pt-8">

          <Hero />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">

            {/* Colonne Principale */}
            <div className="space-y-12">
              <Experience />

              <section>
                <SectionTitle title="Formation" icon={GraduationCap} />
                <div className="grid gap-4">
                  {CV_DATA.education.map((edu, idx) => (
                      <div key={idx} className="bg-eco-card/50 p-4 rounded border border-eco-border hover:border-eco-border/80 transition-colors">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-cv-paper">{edu.degree}</h3>
                          <span className="text-xs font-mono text-cv-muted">{edu.year}</span>
                        </div>
                        <div className="text-sm text-cv-accent mb-1">{edu.school}</div>
                        <p className="text-xs text-cv-muted/80">{edu.details}</p>
                      </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar (Compétences) */}
            <aside className="lg:block space-y-8">
              <div className="sticky top-8">
                <SectionTitle title="Compétences" icon={Code2} />

                <div className="space-y-6">
                  {CV_DATA.skills.map((skillGroup, idx) => (
                      <div key={idx}>
                        <h4 className="text-xs font-bold text-cv-muted uppercase mb-3 flex items-center gap-2">
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
                <div className="mt-8 pt-8 border-t border-eco-border">
                  <h4 className="text-xs font-bold text-cv-muted uppercase mb-3">Intérêts</h4>
                  <p className="text-sm text-cv-muted leading-relaxed">
                    {CV_DATA.hobbies.join(" • ")}
                  </p>
                </div>

                {/* Note d'éco-conception pour le visiteur */}
                <div className="mt-12 p-4 rounded bg-eco-card/30 border border-green-900/20 text-xs">
                  <div className="flex items-center gap-2 text-green-600 mb-2 font-bold">
                    <Server size={12} />
                    <span>Green Hosting</span>
                  </div>
                  <p className="opacity-60 mb-2">
                    Ce site est optimisé pour réduire son empreinte carbone.
                  </p>
                  <ul className="list-disc list-inside opacity-50 space-y-1">
                    <li>Aucune image bitmap</li>
                    <li>Police système</li>
                    <li>Contraste OLED</li>
                  </ul>
                </div>

              </div>
            </aside>
          </div>

          <footer className="mt-24 pt-8 border-t border-eco-border text-center text-xs text-gray-600">
            <p>© 2024 Simon Caillieret — BUT Informatique Lens</p>
          </footer>
        </main>
      </div>
  );
}