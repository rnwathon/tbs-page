import React from 'react';
import { Container } from 'react-bootstrap';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RecommendedSection from './components/RecommendedSection';
import Slider from './components/Slider';

function App() {
  return (
    <main className="">
      <Navbar />
      <Slider />
      <RecommendedSection />
      <Footer />
    </main>
  );
}

export default App;
