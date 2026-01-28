import React from 'react';
import { content } from '../content';

const Legal: React.FC = () => {
  return (
    <div className="bg-neutral-900 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-20">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">Impressum</h1>
          <div className="prose prose-invert max-w-none text-neutral-400">
            <p className="mb-4 font-bold text-white">Angaben gemäß § 5 TMG</p>
            <p className="mb-8">
              Personengesellschaft {content.company.owner}<br />
              {content.company.address.street}<br />
              {content.company.address.zip} {content.company.address.city}
            </p>
            <p className="mb-4 font-bold text-white">Kontakt</p>
            <p className="mb-8">
              Mobil: {content.company.contact.phone}<br />
              E-Mail: {content.company.contact.email}
            </p>
            <p className="mb-4 font-bold text-white">Rechtliche Angaben</p>
            <p className="mb-8">
              Inhaberin: Birgit Engler<br />
              Steuer-Nummer: 07332/21001<br />
              Zuständiges Finanzamt: Freiburg-Land
            </p>
            <p className="mb-4 font-bold text-white">Haftungsausschluss</p>
            <p>{content.pages.legal.impressum}</p>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Datenschutz</h2>
          <div className="prose prose-invert max-w-none text-neutral-400">
            <p className="mb-4">{content.pages.legal.datenschutz}</p>
            <p className="mb-4 font-bold text-white">Datenerfassung auf unserer Website</p>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
            <p className="mb-4">
              Wir nutzen ein SSL-Zertifikat zur sicheren Übertragung Ihrer Daten. Eine Weitergabe Ihrer persönlichen Daten an Dritte erfolgt nicht.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legal;