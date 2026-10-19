import React from 'react';

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
    <section className="section-shell" id="talks-presentations">
      <div className="page-shell">
        <h2 className="section-title">Talks & presentations</h2>
        <div className="mt-2 divide-y divide-slate-200">
          {talks.map((talk) => (
            <article key={talk.title} className="grid gap-1 py-3 sm:grid-cols-[144px_minmax(0,1fr)] sm:gap-5">
              <p className="meta-label pt-0.5">Guest lecture · LUMS</p>
              <div>
                <h3 className="entry-title">{talk.title}</h3>
                <p className="body-copy mt-1">{talk.description}</p>
                <a href={talk.link} className="text-link mt-2 inline-block text-sm" target="_blank" rel="noopener noreferrer">
                  View LinkedIn post
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalksPresentations;
