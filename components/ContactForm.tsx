import React, { useState } from 'react';
import { content } from '../content';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    // Simple honeypot check
    if (formData.get("_bot_trap")) {
      setStatus('success'); // Silently fail for bots
      return;
    }

    formData.append("access_key", content.company.contact.web3forms_key);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-neutral-800 p-8 border-l-4 border-red-600 shadow-xl">
      <h3 className="text-2xl font-bold mb-6">Unverbindliche Anfrage</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field - hidden from users */}
        <div className="hidden" aria-hidden="true">
          <input type="text" name="_bot_trap" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Name</label>
          <input 
            id="form-name"
            type="text" 
            name="name" 
            required 
            autoComplete="name"
            placeholder="Ihr Name"
            className="w-full bg-neutral-900 border border-neutral-700 p-3 text-white focus:outline-none focus:border-red-600 transition-colors" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">E-Mail</label>
            <input 
              id="form-email"
              type="email" 
              name="email" 
              required 
              autoComplete="email"
              placeholder="ihre@mail.de"
              className="w-full bg-neutral-900 border border-neutral-700 p-3 text-white focus:outline-none focus:border-red-600 transition-colors" 
            />
          </div>
          <div>
            <label htmlFor="form-phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Telefonnummer</label>
            <input 
              id="form-phone"
              type="tel" 
              name="phone" 
              required 
              autoComplete="tel"
              placeholder="Für Rückfragen"
              className="w-full bg-neutral-900 border border-neutral-700 p-3 text-white focus:outline-none focus:border-red-600 transition-colors" 
            />
          </div>
        </div>

        <div>
          <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Ihre Nachricht</label>
          <textarea 
            id="form-message"
            name="message" 
            rows={4} 
            required 
            placeholder="Beschreiben Sie kurz Ihr Vorhaben (z.B. Balkon- oder Garagensanierung)..."
            className="w-full bg-neutral-900 border border-neutral-700 p-3 text-white focus:outline-none focus:border-red-600 transition-colors"
          ></textarea>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" required id="privacy" name="privacy" className="accent-red-600 w-4 h-4" />
          <label htmlFor="privacy" className="text-xs text-neutral-400">
            Ich stimme der Datenverarbeitung gemäß <a href="#/impressum" className="underline hover:text-white">Datenschutzerklärung</a> zu.
          </label>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 uppercase tracking-widest transition-colors disabled:opacity-50 focus:ring-4 focus:ring-red-600/50 outline-none"
        >
          {status === 'submitting' ? 'Sendet...' : 'Kostenlose Beratung anfordern'}
        </button>

        <div aria-live="polite" className="mt-4">
          {status === 'success' && (
            <p className="text-green-500 text-sm font-bold bg-green-500/10 p-3 border border-green-500/20" role="status">
              Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns umgehend bei Ihnen.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm font-bold bg-red-500/10 p-3 border border-red-500/20" role="alert">
              Es gab ein Problem. Bitte prüfen Sie Ihre Verbindung oder rufen Sie uns direkt an.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;