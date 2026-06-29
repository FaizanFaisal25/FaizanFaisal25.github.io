import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section-shell border-t border-slate-200 dark:border-slate-800" id="contact">
      <div className="page-shell">
        <div data-reveal="section" className="surface-card overflow-hidden">
          <div className="grid gap-8 bg-gradient-to-br from-slate-950 via-slate-900 to-brand-700/90 px-6 py-8 text-white sm:px-10 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100/80">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Open to research collaborations and thoughtful conversations.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                If you are working on ML4SE, applied NLP, generative AI, or
                healthcare-focused AI systems, I would be glad to connect.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/25 bg-white/10 p-6 backdrop-blur-sm dark:border-white/15 dark:bg-slate-950/30">
              <a
                href="mailto:fznfaisal@ucdavis.edu"
                className="inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-sky-100"
              >
                <FaEnvelope />
                fznfaisal@ucdavis.edu
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
