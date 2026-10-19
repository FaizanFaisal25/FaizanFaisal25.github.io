import React from 'react';

const AwardsAndHonors = () => {
  const awards = [
    {
      title: 'Award of High Distinction',
      date: 'June 2023',
      description: 'The highest honor at LUMS, awarded upon completing the Bachelor of Science in Computer Science with a CGPA of 3.8 / 4.0. Graduated in the top 8% of the class of 2023, which consisted of 154 students.',
    },
    {
        title: "Dean's Honor List",
        date: '2019–2023',
        description: "Achieved recognition on the Dean's Honor List for every year at LUMS, reflecting consistent academic excellence and outstanding performance."
    },
  ];

  return (
    <section className="section-shell" id="awards-and-honors">
      <div className="page-shell">
        <h2 className="section-title">Awards & honors</h2>
        <div className="mt-2 divide-y divide-slate-200">
          {awards.map((award) => (
            <article key={award.title} className="grid gap-1 py-3 sm:grid-cols-[144px_minmax(0,1fr)] sm:gap-5">
              <p className="meta-label pt-0.5">{award.date}</p>
              <div>
                <h3 className="entry-title">{award.title}</h3>
                <p className="body-copy mt-1">{award.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndHonors;
