
import React from 'react';
import { content } from '../content';

const Services: React.FC = () => {
  return (
    <div className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <h1 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2 underline underline-offset-8">Leistungsportfolio</h1>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">Unsere Lösungen</h2>
        </header>

        <div className="space-y-32">
          {content.pages.services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-red-600/20 rounded-sm -z-10 translate-x-2 translate-y-2"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full aspect-video object-cover shadow-2xl transition-all duration-500 hover:scale-[1.02]" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800';
                      console.error(`Bild konnte nicht geladen werden: ${service.image}`);
                    }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="text-red-600 mr-4 font-mono">0{index + 1}</span>
                  {service.title}
                </h3>
                <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-neutral-400">
                      <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
