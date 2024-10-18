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

function App() {
  return (
    <div>
      <Navbar />
      <div className="font-sans text-gray-900 mx-4 md:mx-8 lg:mx-24 xl:mx-80">
      <Home />
      <About />
      <Research />
      <OpenSourceProjects />
      <AwardsAndHonors />
      <Misc />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;
