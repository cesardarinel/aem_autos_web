import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import SearchForm from './components/SearchForm';
import LatestCars from './components/LatestCars';
import ExploreBrands from './components/ExploreBrands';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <div className="container">
        <SearchForm />
      </div>
      <LatestCars />
      <ExploreBrands />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;