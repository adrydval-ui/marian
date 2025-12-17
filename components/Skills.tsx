import React from 'react';
import { Skill, SkillLevel } from '../types';

const skills: Skill[] = [
  { name: "Restartování PC", level: SkillLevel.MARIAN, icon: "🔄" },
  { name: "Hledání klávesy 'Any Key'", level: SkillLevel.LEGEND, icon: "⌨️" },
  { name: "Instalace Adobe Readeru", level: SkillLevel.ADVANCED, icon: "📄" },
  { name: "Spánek s otevřenýma očima", level: SkillLevel.MARIAN, icon: "😴" },
  { name: "HTML (Hot Male Language)", level: SkillLevel.ADVANCED, icon: "💻" },
  { name: "Kávový management", level: SkillLevel.NOOB, icon: "☕" },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
         <h2 className="text-4xl font-bold text-center mb-16">
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-marian-hot to-purple-500">
             IT Portfolio
           </span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group relative bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-marian-hot/50 transition-colors">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-200"></div>
                <div className="relative flex items-center gap-4">
                  <span className="text-4xl">{skill.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg text-white">{skill.name}</h4>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded border ${
                      skill.level === SkillLevel.MARIAN ? 'bg-marian-hot/20 text-marian-hot border-marian-hot' :
                      skill.level === SkillLevel.LEGEND ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500' :
                      'bg-slate-600/30 text-slate-400 border-slate-600'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};