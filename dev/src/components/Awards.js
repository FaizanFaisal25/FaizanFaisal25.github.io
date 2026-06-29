import React from 'react';

const AwardsAndHonors = () => {
  const awards = [
    {
      title: 'Award of High Distinction (June 2023)',
      description: 'The highest honor at LUMS, awarded upon completing the Bachelor of Science in Computer Science with a CGPA of 3.8 / 4.0. Graduated in the top 8% of the class of 2023, which consisted of 154 students.',
    },
    {
        title: "Dean's Honor List (2019 - 2023)",
        description: "Achieved recognition on the Dean's Honor List for every year at LUMS, reflecting consistent academic excellence and outstanding performance."
    },
  ];

  return (
    <section className="section-shell border-t border-slate-200 dark:border-slate-800" id="awards-and-honors">
      <div className="page-shell">
        <p className="section-kicker">Awards</p>
        <h2 className="section-title">Awards and honors</h2>
        <p className="section-intro">
          Academic distinctions that reflect sustained performance and research-oriented rigor.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <article key={index} data-reveal="card" className="surface-card h-full p-6 sm:p-7">
              <span className="meta-chip">Recognition</span>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-slate-50">
                {award.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {award.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndHonors;
