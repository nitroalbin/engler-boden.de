import React from 'react';

const projects = [
  {
    title: "Balkonsanierung",
    before: "/a1.webp",
    after: "/b1.webp"
  },
  {
    title: "Garagenbeschichtung",
    before: "/a2.webp",
    after: "/b2.webp"
  },
  {
    title: "Metzgereiboden",
    before: "/a3.webp",
    after: "/b3.webp"
  },
  {
    title: "Treppenbeschichtung",
    before: "/b4.webp",
    after: "/a4.webp"
  },
  {
    title: "Küchenboden",
    before: "/a5.webp",
    after: "/b5.webp"
  }
];

const References: React.FC = () => {
  return (
    <div className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2 underline underline-offset-8 inline-block">Galerie</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mt-4">Unsere Ergebnisse</h1>
          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von der Qualität unserer Arbeit. Hier sehen Sie den direkten Vergleich zwischen dem alten Zustand und unserer professionellen Neubeschichtung.
          </p>
        </header>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <article key={idx} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
                <div className="relative overflow-hidden shadow-2xl">
                  <img 
                    src={project.before} 
                    alt={`${project.title} vorher`} 
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover grayscale opacity-60" 
                  />
                  <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 text-xs font-bold uppercase tracking-widest border-l-2 border-neutral-500">
                    Vorher
                  </div>
                </div>
                
                <div className="relative overflow-hidden shadow-2xl">
                  <img 
                    src={project.after} 
                    alt={`${project.title} nachher`} 
                    width="800"
                    height="600"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover border-2 border-red-600/20" 
                  />
                  <div className="absolute top-4 left-4 bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                    Nachher
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;