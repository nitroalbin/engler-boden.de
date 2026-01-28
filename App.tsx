import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import CookieBanner from './components/CookieBanner';

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
        </Routes>
      </Layout>
      <CookieBanner />
    </Router>
  );
};

export default App;