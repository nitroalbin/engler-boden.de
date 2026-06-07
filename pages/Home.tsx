import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../content';

const Home: React.FC = () => {
  const { hero, stats, intro } = content.pages.home;

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white">
                {hero.headline.split('.').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i === 0 && <span className="text-red-600">.</span>}
                  </React.Fragment>
                ))}
              </h1>
              <p className="mt-6 text-xl text-neutral-300 font-medium max-w-xl">
                {hero.subline}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/leistungen" className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-4 px-8 uppercase tracking-widest transition-all focus:ring-4 focus:ring-red-600/50 outline-none">
                  {hero.cta_primary}
                </Link>
                <Link to="/referenzen" className="border-2 border-white hover:bg-white hover:text-black active:bg-neutral-200 active:border-neutral-200 text-white font-bold py-4 px-8 uppercase tracking-widest transition-all focus:ring-4 focus:ring-white/50 outline-none">
                  {hero.cta_secondary}
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-neutral-800 flex gap-0">
              {hero.images ? (
                hero.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Hero Bild ${i + 1}`}
                    width="600"
                    height="450"
                    fetchPriority="high"
                    className="w-1/2 h-auto"
                  />
                ))
              ) : (
                <img
                  src={hero.image}
                  alt="Treppenbeschichtung"
                  width="1200"
                  height="900"
                  fetchPriority="high"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-neutral-950 py-12 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-black text-white">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {intro.title.split('–').map((part, i) => (
              <span key={i} className={i === 1 ? "text-red-600" : ""}>
                {i === 1 ? `– ${part}` : part}
              </span>
            ))}
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            {intro.text}
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2 underline underline-offset-8">Expertise</p>
              <h3 className="text-4xl font-black uppercase tracking-tighter">Was wir tun</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.pages.services.map((service) => (
              <article key={service.id} className="group relative bg-neutral-900 overflow-hidden border border-neutral-800">
                <div className="h-64 overflow-hidden bg-neutral-800">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                  <p className="text-neutral-400 text-sm mb-6">{service.description}</p>
                  <Link to="/leistungen" className="text-red-600 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
                    Mehr Erfahren &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;