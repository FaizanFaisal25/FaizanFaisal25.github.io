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
    <section className="container mx-auto px-6 py-10" id="awards-and-honors">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Awards & Honors</h2>
      <ul className="list-disc pl-5 space-y-4 text-gray-600">
        {awards.map((award, index) => (
          <li key={index}>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold mb-2">{award.title}</span>
            </div>
            <p className="text-gray-500 mt-1">{award.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AwardsAndHonors;
