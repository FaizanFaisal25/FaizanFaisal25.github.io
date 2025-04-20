// src/App.js
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="font-sans text-gray-900 mx-4 sm:mx-8 md:mx-12 lg:mx-32 xl:mx-96">
        <Home />
        <About />
        <Research />
        <OpenSourceProjects />
        <AwardsAndHonors />
        <TalksPresentations />
        <Misc />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}


export default App;
