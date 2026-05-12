import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import CookieBanner from './components/CookieBanner';

const NotFound: React.FC = () => (
  <div className="bg-neutral-900 py-24 text-center">
    <h1 className="text-6xl font-black text-white mb-4">404</h1>
    <p className="text-neutral-400 mb-8">Seite nicht gefunden.</p>
    <Link to="/" className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3 px-6 uppercase tracking-widest transition-colors focus:outline-none focus:ring-4 focus:ring-red-600/50">
      Zur Startseite
    </Link>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Services />} />
          <Route path="/referenzen" element={<References />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <CookieBanner />
    </Router>
  );
};

export default App;