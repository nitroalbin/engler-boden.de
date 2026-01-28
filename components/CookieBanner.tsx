import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 p-4 md:p-8 z-[100]" 
      role="region" 
      aria-label="Cookie Zustimmung"
    >
      <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-700 shadow-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-neutral-400">
          <p>
            Wir nutzen Cookies, um unsere Website für Sie zu optimieren. Mit der Nutzung der Website erklären Sie sich damit einverstanden. 
            Details finden Sie in unserer <a href="#/impressum" className="text-white underline focus:ring-1 focus:ring-red-600">Datenschutzerklärung</a>.
          </p>
        </div>
        <button 
          onClick={accept}
          className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-8 py-3 whitespace-nowrap transition-colors focus:ring-4 focus:ring-red-600/50 outline-none"
        >
          Einverstanden
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;