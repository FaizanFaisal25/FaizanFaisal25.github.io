import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePhoto from '../assets/hero/profile_photo_2.jpg';

const Home = () => {
  return (
    <section id="home" className="py-6 sm:py-8">
      <div className="page-shell">
        <div className="grid grid-cols-[136px_minmax(0,1fr)] items-start gap-x-5 gap-y-3 sm:grid-cols-[224px_minmax(0,1fr)] sm:gap-x-8 sm:gap-y-0">
          <div className="col-start-2 row-start-1">
            <p className="section-kicker">Graduate student · UC Davis</p>
            <h1 className="mt-2 font-display text-4xl font-semibold leading-none tracking-tight text-slate-950 sm:text-6xl">
              Faizan <span className="italic">Faisal</span>
            </h1>
          </div>
          <img
            src={profilePhoto}
            alt="Faizan Faisal"
            className="col-start-1 row-start-1 aspect-square w-full rounded-full object-cover sm:row-span-2"
            width="224"
            height="224"
          />
          <div className="col-span-2 col-start-1 row-start-2 sm:col-span-1 sm:col-start-2">
            <p className="mt-3 max-w-2xl text-base leading-6 text-slate-700">
              AI researcher and full-stack engineer working on reliable language
              models for software engineering and real-world applications.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Graduate Student Researcher at DECAL Lab
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <a href="mailto:fznfaisal@ucdavis.edu" className="text-link inline-flex items-center gap-2 text-sm">
                <FaEnvelope aria-hidden="true" /> Email
              </a>
              <a href="https://github.com/FaizanFaisal25" target="_blank" rel="noopener noreferrer" className="text-link inline-flex items-center gap-2 text-sm">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a href="https://linkedin.com/in/faizan-faisal25" target="_blank" rel="noopener noreferrer" className="text-link inline-flex items-center gap-2 text-sm">
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
