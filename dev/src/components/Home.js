import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import davisCampusImage from '../assets/hero/davis_campus.png';
import profilePhoto from '../assets/hero/profile_photo.jpg';

const Home = () => {
  return (
    <section id="home" className="section-shell pb-10 pt-8 sm:pb-12 sm:pt-10">
      <div className="page-shell">
        <div data-reveal="section" className="relative overflow-hidden rounded-[32px] bg-slate-950 shadow-soft">
          <div className="absolute inset-0">
            <img
              src={davisCampusImage}
              alt="UC Davis campus walkway"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-white/64" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(2,132,199,0.18),_transparent_40%)]" />
          </div>

          <div className="relative z-10 grid gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:px-14 lg:py-16">
            <div className="max-w-3xl text-white">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-sky-100">
                Graduate Student at UC Davis
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Faizan Faisal
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:fznfaisal@ucdavis.edu" className="pill-link">
                  <FaEnvelope className="text-brand-700 dark:text-brand-400" />
                  Email
                </a>
                <a
                  href="https://github.com/FaizanFaisal25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link"
                >
                  <FaGithub className="text-brand-700 dark:text-brand-400" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/faizan-faisal25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-link"
                >
                  <FaLinkedin className="text-brand-700 dark:text-brand-400" />
                  LinkedIn
                </a>
              </div>

              <dl className="mt-8 grid gap-4 text-left sm:grid-cols-3">
                <div className="rounded-2xl border border-white/20 bg-slate-950/28 p-4 backdrop-blur-sm">
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-100/80">
                    Focus
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-100">
                    ML4SE, full-stack engineering, and generative AI
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/20 bg-slate-950/28 p-4 backdrop-blur-sm">
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-100/80">
                    Current Role
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-100">
                    Graduate Student Researcher, DECAL Lab
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/20 bg-slate-950/28 p-4 backdrop-blur-sm">
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-100/80">
                    Domains
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-100">
                    Software engineering, healthcare, biomedicine, and finance
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="rounded-[28px] border border-slate-200/80 bg-white/70 p-4 shadow-soft backdrop-blur-sm dark:border-white/20 dark:bg-white/10">
                <img
                  src={profilePhoto}
                  alt="Faizan Faisal"
                  className="h-72 w-64 rounded-[22px] object-cover object-center shadow-soft sm:h-80 sm:w-72"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
