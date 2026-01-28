
import React from 'react';
import { content } from '../content';

const Sectors: React.FC = () => {
  return (
    <div className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <h1 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2 underline underline-offset-8 inline-block">Branchenexpertise</h1>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mt-4">Wo wir zuhause sind</h2>
          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
            Jede Branche hat spezifische Anforderungen an Hygiene, Rutschsicherheit und Belastbarkeit. 
            Wir kennen die Standards und liefern die passende Lösung.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-neutral-800">
          {content.pages.sectors.map((sector) => (
            <div key={sector.id} className="relative group h-[500px] overflow-hidden border-r border-b border-neutral-800">
              <img src={sector.image} alt={sector.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">{sector.title}</h3>
                <p className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">
                  {sector.description}
                </p>
                <div className="w-12 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sectors;
