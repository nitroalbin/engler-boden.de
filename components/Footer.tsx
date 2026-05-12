
import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-black tracking-tighter text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded">
              ENGLER<span className="text-red-600">.</span>
            </Link>
            <p className="mt-4 text-neutral-400 max-w-sm">
              Ihr Spezialist für Balkonsanierung, Garagenbeschichtung und hygienische Bodenlösungen in Breisach und Umgebung.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Kontakt</h3>
            <ul className="text-neutral-400 space-y-2 text-sm">
              <li>{content.company.address.street}</li>
              <li>{content.company.address.zip} {content.company.address.city}</li>
              <li className="pt-2">Tel: {content.company.contact.phone}</li>
              <li>Mail: {content.company.contact.email}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Rechtliches</h3>
            <ul className="text-neutral-400 space-y-2 text-sm">
              <li><Link to="/impressum" className="hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded">Impressum</Link></li>
              <li><Link to="/impressum" className="hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} {content.company.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
