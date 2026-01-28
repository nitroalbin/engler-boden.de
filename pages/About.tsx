
import React from 'react';
import { content } from '../content';

const About: React.FC = () => {
  const { headline, subheadline, text_main, text_secondary, values, image } = content.pages.about;

  return (
    <div className="bg-neutral-900">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2 underline underline-offset-8">Unsere Geschichte</h1>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">{headline}</h2>
            <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
              {text_main}
            </p>
            <p className="text-neutral-400 mb-8">
              {text_secondary}
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-neutral-800">
              <div>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Inhaber</p>
                <p className="text-lg font-bold text-white">{content.company.owner}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Standort</p>
                <p className="text-lg font-bold text-white">{content.company.address.city}, DE</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={image} 
              alt="Work in progress" 
              className="w-full grayscale shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-red-600 p-8 hidden md:block">
              <p className="text-4xl font-black text-white italic">"{subheadline}"</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((val, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-[2px] bg-red-600 mr-4"></span> {val.title}
              </h3>
              <p className="text-neutral-400 text-sm">
                {val.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
