import React from 'react';

// Research projects data including arXiv links
const researchProjects = [
  {
    title: 'LLMs for Interactive Learning in Human-Robot Interaction (HRI)',
    description: (
      <>
        Contributing as a volunteer researcher under{' '}
        <a 
          href="https://www.westernsydney.edu.au/marcs/about/our_people/researchers/dr_omar_mubin" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500"
        >
          Dr. Omar Mubin
        </a>{' '} 
        (Western Sydney University), this project focuses on integrating Large Language Models (LLMs) into Human-Robot Interaction (HRI) to enhance educational experiences. The research explores how LLMs can enable robots to engage in more natural and interactive learning sessions with students, addressing both pedagogical and technical challenges in real-time robot-student interactions.
      </>
    ),
    status: 'current',
  },
  {
    title: 'LEGAL-UQA: A Low-Resource Urdu-English Dataset for Legal Question Answering',
    description: "LEGAL-UQA is the first Urdu legal question-answering dataset derived from Pakistan's constitution, featuring 619 question-answer pairs with legal article contexts to address the need for domain-specific NLP resources in low-resource languages. The dataset creation involved OCR extraction, manual refinement, and translation assistance, leading to high accuracy evaluations of generalist language models while highlighting the challenges of adapting multilingual models to specialized domains and enhancing legal information access in Pakistan.",
    arxivLink: 'https://arxiv.org/abs/2410.13013', // Replace with actual arXiv link
    status: 'current', 
    underReview: true,
  },
  {
    title: 'Distribution Hub Optimization: Application of Conditional P-Median Using Road Network Distances (Final Year Project)',
    description: "This case study addresses inefficiencies in last-mile delivery logistics in Pakistan's growing e-commerce sector. Using a GIS-based approach, we apply the conditional p-median problem (p = 1) to optimize the placement of a new logistics hub. Our method calculates road-network-based distances to determine the optimal hub location, factoring in q existing facilities. Using delivery data from Muller and Phipps Logistics Pakistan, we created a distance matrix between candidate hub locations and past delivery points. Simulations were also performed using Lahore's population distribution to handle scenarios without delivery data. The optimized hub placement resulted in a 16% reduction in average delivery distances, improving both operational efficiency and environmental impact.",
    arxivLink: 'https://arxiv.org/abs/YYYY.YYYYY', // Replace with actual arXiv link
    status: 'past',
  },
  // Add more projects as needed
];

function Research() {
  // Filter the projects into current and past categories
  const currentProjects = researchProjects.filter(project => project.status === 'current');
  const pastProjects = researchProjects.filter(project => project.status === 'past');

  return (
    <section id="research" className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-8">Research</h2>
      
      {/* Current Projects Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Current Projects</h3>
        <ul className="list-disc ml-5">
          {currentProjects.map((project, index) => (
            <li key={index} className="mb-4">
              <h4 className="text-xl font-semibold">{project.title}</h4>
              {project.arxivLink && (
                <a href={project.arxivLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 mb-2 block">
                  [arXiv 2024]
                </a>
              )}
              {project.underReview && (
                <p className="text-sm text-gray-500 mt-1">[Under Review for NAACL 2025]</p>
              )}
              <p className="text-lg mt-2"><em>{project.description}</em></p>
            </li>
          ))}
        </ul>
      </div>

      {/* Past Projects Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-6">Past Projects</h3>
        <ul className="list-disc ml-5">
          {pastProjects.map((project, index) => (
            <li key={index} className="mb-4">
              <h4 className="text-xl font-semibold">{project.title}</h4>
              {project.arxivLink && (
                <a href={project.arxivLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 mb-2 block">
                  [arXiv]
                </a>
              )}
              <p className="text-lg mt-2"><em>{project.description}</em></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Research;
