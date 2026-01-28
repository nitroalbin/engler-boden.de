import React from 'react';
import ContactForm from '../components/ContactForm';
import { content } from '../content';

const Contact: React.FC = () => {
  return (
    <div className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2 underline underline-offset-8">Kontakt</h1>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Ihr neues Projekt startet hier</h2>
            <p className="text-lg text-neutral-300 mb-12">
              Balkon undicht? Garage staubig? Wir helfen Ihnen schnell und zuverlässig. 
              Rufen Sie uns an oder schreiben Sie uns eine Nachricht.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-neutral-800 p-4 mr-6 border border-neutral-700">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Mobilnummer</h4>
                  <p className="text-neutral-400">{content.company.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-neutral-800 p-4 mr-6 border border-neutral-700">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">E-Mail</h4>
                  <p className="text-neutral-400">{content.company.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-neutral-800 p-4 mr-6 border border-neutral-700">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">Standort</h4>
                  <p className="text-neutral-400">{content.company.address.street}<br />{content.company.address.zip} {content.company.address.city}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;