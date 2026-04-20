import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import LatestCars from './components/LatestCars';
import ExploreBrands from './components/ExploreBrands';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import FinancingPage from './components/FinancingPage';

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#contacto') {
        setView('contact');
      } else if (hash === '#financiamiento') {
        setView('financing');
      } else {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();

    AOS.init({ duration: 1000, once: false });

    return () => window.removeEventListener('hashchange', handleHash);
  }, [view]);

  return (
    <div className="App">
      <Header />
      <main>
        {view === 'home' && (
          <>
            <div data-aos="fade-down"><HeroBanner /></div>
            <div data-aos="fade-up"><LatestCars /></div>
            <div data-aos="fade-right"><ExploreBrands /></div>
            <div data-aos="fade-left"><HowItWorks /></div>
          </>
        )}
        {view === 'contact' && <div data-aos="fade-in"><ContactUs /></div>}
        {view === 'financing' && <div data-aos="fade-in"><FinancingPage /></div>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
