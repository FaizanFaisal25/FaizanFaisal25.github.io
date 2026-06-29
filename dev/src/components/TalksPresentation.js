import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const TalksPresentations = () => {
  const talks = [
    {
      title: 'AI in the Real World: Leveraging Machine Learning Across Sectors',
      description: (
        <span>
          Delivered as a guest lecture for the graduate course, AI-501, at LUMS. Invited by{' '}
          <a
            href="https://lums.edu.pk/lums_employee/4394"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Dr. Zubair Khalid
          </a>{' '}
          (2024 Gordon Bell Prize winner), the talk explored how modern AI techniques are transforming sectors like insurance, pharma, retail, and healthcare.
        </span>
      ),
      link: 'https://www.linkedin.com/posts/faizan-faisal25_i-had-the-privilege-of-being-invited-to-guest-activity-7269043089623666688-iqrf',
    },
  ];

  return (
    <section className="section-shell border-t border-slate-200 dark:border-slate-800" id="talks-presentations">
      <div className="page-shell">
        <p className="section-kicker">Talks</p>
        <h2 className="section-title">Recent talks and presentations</h2>
        <p className="section-intro">
          Invited talks and presentations on applied machine learning and practical AI deployment.
        </p>

        <div className="mt-10 grid gap-6">
          {talks.map((talk, index) => (
            <article key={index} data-reveal="card" className="surface-card p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="meta-chip">Guest lecture</span>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-950 dark:text-slate-50 sm:text-2xl">
                    {talk.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{talk.description}</p>
              <a
                href={talk.link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-base" />
                View LinkedIn post
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalksPresentations;
