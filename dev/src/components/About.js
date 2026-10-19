import React from 'react';

const About = () => {
  return (
    <section className="section-shell border-t border-slate-200" id="about">
      <div className="page-shell">
        <h2 className="section-title">About</h2>
        <div className="mt-3 grid gap-5 md:grid-cols-[1.6fr_1fr] md:gap-7">
          <div>
            <p className="body-copy">
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
              . My work bridges AI and software engineering, with a focus on
              improving language models for software engineering tasks.
            </p>
          </div>

          <div className="border-l-2 border-slate-200 pl-4">
            <p className="section-kicker">
              Current Focus
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <h3 className="entry-title">ML4SE</h3>
                <p className="body-copy">
                  Improving LLMs for code generation and related software
                  engineering tasks.
                </p>
              </li>
              <li>
                <h3 className="entry-title">
                  Applied NLP / Generative AI
                </h3>
                <p className="body-copy">
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
