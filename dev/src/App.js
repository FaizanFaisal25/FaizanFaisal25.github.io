import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import OpenSourceProjects from './components/Projects';
import Contact from './components/Contact';
import Misc from './components/Misc';
import AwardsAndHonors from './components/Awards';
import TalksPresentations from './components/TalksPresentation';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Home />
        <About />
        <Research />
        <OpenSourceProjects />
        <AwardsAndHonors />
        <TalksPresentations />
        <Misc />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
