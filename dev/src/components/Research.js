import React from 'react';

// Research projects data including links
const researchProjects = [
  {
    title: 'Dynamic Framework for Collaborative Learning: Leveraging Advanced LLM with Adaptive Feedback Mechanisms',
    description: (
      <>
        Contributing as a Research Assistant under{' '}
        <a
          href="https://www.westernsydney.edu.au/marcs/about/our_people/researchers/dr_omar_mubin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Dr. Omar Mubin
        </a>{' '}
        (Western Sydney University), I served as the first co-author on this research, which presents a modular framework that leverages advanced LLMs as adaptive moderators in collaborative learning environments. The system enhances engagement, inclusivity, and reflective learning through dynamic prompt adjustments, real-time feedback, and balanced participation. It addresses limitations of static moderation and demonstrates scalability across subjects and learner groups.
      </>
    ),
    status: 'current',
    conference: 'Activity and Behavior Computing 2025',
    conferenceLink: 'https://autocare.ai/abc2025',
    paperLink: 'https://drive.google.com/file/d/1a5xoFlGS97QmBL8HwtgAfJycnJHjnd-m/view',
  },
  {
    title: 'LEGAL-UQA: A Low-Resource Urdu-English Dataset for Legal Question Answering',
    description: "LEGAL-UQA is the first Urdu legal question-answering dataset derived from Pakistan's constitution, featuring 619 question-answer pairs with legal article contexts to address the need for domain-specific NLP resources in low-resource languages. The dataset creation involved OCR extraction, manual refinement, and translation assistance, leading to high accuracy evaluations of generalist language models while highlighting the challenges of adapting multilingual models to specialized domains and enhancing legal information access in Pakistan.",
    arxivLink: 'https://arxiv.org/abs/2410.13013',
    status: 'current',
    underReview: true,
  },
  {
    title: 'Distribution Hub Optimization: Application of Conditional P-Median Using Road Network Distances (Final Year Project)',
    description: "This case study addresses inefficiencies in last-mile delivery logistics in Pakistan's growing e-commerce sector. Using a GIS-based approach, we apply the conditional p-median problem (p = 1) to optimize the placement of a new logistics hub. Our method calculates road-network-based distances to determine the optimal hub location, factoring in q existing facilities. Using delivery data from Muller and Phipps Logistics Pakistan, we created a distance matrix between candidate hub locations and past delivery points. Simulations were also performed using Lahore's population distribution to handle scenarios without delivery data. The optimized hub placement resulted in a 16% reduction in average delivery distances, improving both operational efficiency and environmental impact.",
    driveLink: 'https://arxiv.org/abs/2411.05851',
    status: 'past',
  },
  // Add more projects as needed
];

function Research() {
  const currentProjects = researchProjects.filter(p => p.status === 'current');
  const pastProjects = researchProjects.filter(p => p.status === 'past');

  return (
    <section id="research" className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-8">Research</h2>

      {/* Current Projects Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Current Projects</h3>
        <ul className="list-disc ml-5">
          {currentProjects.map((project, idx) => (
            <li key={idx} className="mb-6">
              <h4 className="text-xl font-semibold">{project.title}</h4>

              {/* Accepted at conference */}
              {project.conferenceLink && (
                <a
                  href={project.conferenceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 block mb-1"
                >
                  [Accepted at {project.conference}]
                </a>
              )}

              {/* Link to paper */}
              {project.paperLink && (
                <a
                  href={project.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 block mb-2"
                >
                  [View Paper]
                </a>
              )}

              {/* arXiv link for other current projects */}
              {project.arxivLink && (
                <a
                  href={project.arxivLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 block mb-2"
                >
                  [View on arXiv]
                </a>
              )}

              {/* Under-review note */}
              {project.underReview && (
                <p className="text-sm text-gray-500 mb-2">
                  [Ongoing Research]
                </p>
              )}

              <p className="text-gray-600 italic">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Past Projects Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-6">Past Projects</h3>
        <ul className="list-disc ml-5">
          {pastProjects.map((project, idx) => (
            <li key={idx} className="mb-4">
              <h4 className="text-xl font-semibold">{project.title}</h4>
              {project.driveLink && (
                <a
                  href={project.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mb-2 block"
                >
                  [View on arXiv]
                </a>
              )}
              <p className="text-gray-600 italic">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Research;
