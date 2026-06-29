import React from 'react';

const About = () => {
  return (
    <section className="section-shell border-t border-slate-200 dark:border-slate-800" id="about">
      <div className="page-shell">
        <p className="section-kicker">About</p>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div data-reveal="section" className="max-w-2xl">
            <h2 className="section-title">AI researcher and full-stack engineer focused on dependable applied AI.</h2>
            <p className="section-intro">
              I am a graduate student in Computer Science at the{' '}
              <a
                href="https://cs.ucdavis.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                University of California, Davis
              </a>
              . I currently work at the{' '}
              <a
                href="https://decallab.cs.ucdavis.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                DECAL Lab
              </a>{' '}
              as a Graduate Student Researcher under{' '}
              <a
                href="https://cs.ucdavis.edu/directory/prem-devanbu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Prof. Prem Devanbu
              </a>
              . My work bridges AI research, practical system building, and
              full-stack engineering, with an emphasis on reliable language
              technologies that perform well in high-stakes settings.
            </p>
          </div>

          <div data-reveal="card" className="surface-card p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-400">
              Current Focus
            </p>
            <ul className="mt-4 space-y-3">
              <li className="rounded-2xl bg-slate-50 p-3.5 dark:bg-slate-800/80">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-50">ML4SE</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Improving LLMs for code generation and related software
                  engineering tasks.
                </p>
              </li>
              <li className="rounded-2xl bg-slate-50 p-3.5 dark:bg-slate-800/80">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
                  Applied NLP / Generative AI
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Building and studying applications with a focus on healthcare,
                  biomedicine, and finance.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
