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
            className="text-blue-600 hover:underline"
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
    <section className="container mx-auto px-6 py-10" id="talks-presentations">
      <h2 className="text-4xl font-bold text-black mb-12">Recent Talks / Presentations</h2>
      <ul className="list-disc pl-5 space-y-4 text-gray-600">
        {talks.map((talk, index) => (
          <li key={index}>
            <div className="flex items-center space-x-2">
              <a
                href={talk.link}
                className="text-blue-600 hover:underline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-2xl font-semibold">{talk.title}</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn Logo"
                  className="w-5 h-5 ml-1"
                />
              </a>
            </div>
            <p className="text-gray-500 mt-1">{talk.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TalksPresentations;
