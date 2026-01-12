import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProjectTypes from './components/ProjectTypes';
import HowItWorks from './components/HowItWorks';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProjectTypes />
        <HowItWorks />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
