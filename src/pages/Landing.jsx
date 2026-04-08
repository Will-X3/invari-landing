import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import PainPoints from '../components/landing/PainPoints';
import Features from '../components/landing/Features';
import Benefits from '../components/landing/Benefits';
import HowItWorks from '../components/landing/HowItWorks';
import Differentiation from '../components/landing/Differentiation';
import Metrics from '../components/landing/Metrics';
import Trust from '../components/landing/Trust';
import FAQ from '../components/landing/FAQ';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Benefits />
      <Differentiation />
      <Metrics />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}