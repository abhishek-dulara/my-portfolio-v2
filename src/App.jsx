import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Insights from './components/Insights';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#020617] min-h-screen font-inter selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Insights />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;