import React from 'react';
import collaborativeLearningImage from '../assets/research/IEEE_Paper_Diagram.png';
import soapPaperImage from '../assets/research/soap_paper.png';
import legalUqaImage from '../assets/research/legaluqa.png';
import optimizationProjectImage from '../assets/research/optimization_project.png';
import advisoryPromptsImage from '../assets/research/advisory_prompts_pipeline.png';
import bioKgExplorerImage from '../assets/research/biokg_explorer_interface.png';

const researchProjects = [
  {
    title: 'Distilling Reasoning Traces into Advisory Prompts for Software Engineering Tasks',
    image: advisoryPromptsImage,
    description: 'We distill lessons from reasoning traces into short advisory prompts that help language models avoid coding errors without always paying the cost of reasoning.',
    paperLink: 'https://doi.org/10.48550/arXiv.2608.00437',
    status: 'current',
  },
  {
    title: 'BioKG Explorer: Interactive Visual Analytics for Biomedical Knowledge Graph Exploration over PrimeKG',
    image: bioKgExplorerImage,
    description: 'BioKG Explorer is a full-stack React, D3, FastAPI, and Neo4j application for no-code exploration, path analysis, and disease-focused analytics over PrimeKG.',
    paperLink: 'https://www.researchsquare.com/article/rs-10004105/v1',
    status: 'current',
  },
  {
    title: 'Dynamic Framework for Collaborative Learning: Leveraging Advanced LLM with Adaptive Feedback Mechanisms',
    image: collaborativeLearningImage,
    description: (
      <>
        As a Research Assistant under{' '}
        <a
          href="https://www.westernsydney.edu.au/marcs/about/our_people/researchers/dr_omar_mubin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Dr. Omar Mubin
        </a>{' '}
        (Western Sydney University), I co-authored a framework that uses LLMs as adaptive moderators to improve engagement and balance participation in collaborative learning.
      </>
    ),
    status: 'past',
    conference: 'Activity and Behavior Computing 2025',
    conferenceLink: 'https://ieeexplore.ieee.org/document/11118419',
  },
  {
    title: 'When Reasoning Hurts: Source-Aware Evaluation of Frontier LLMs for Clinical SOAP Note Generation',
    image: soapPaperImage,
    description: 'We evaluate whether reasoning and same-source RAG improve SOAP note generation, and find that stronger reasoning does not automatically lead to better clinical documentation.',
    paperLink: 'https://doi.org/10.48550/arXiv.2605.24902',
    status: 'current',
  },
  {
    title: 'LEGAL-UQA: A Low-Resource Urdu-English Dataset for Legal Question Answering',
    image: legalUqaImage,
    description: "LEGAL-UQA is a low-resource Urdu-English legal QA dataset built from Pakistan's constitution to support domain-specific NLP research and access to legal information.",
    paperLink: 'https://doi.org/10.48550/arXiv.2410.13013',
    status: 'past',
  },
  {
    title: 'Distribution Hub Optimization: Application of Conditional P-Median Using Road Network Distances (Final Year Project)',
    image: optimizationProjectImage,
    description: 'This GIS-based logistics study optimized new hub placement for last-mile delivery and reduced average delivery distance by 16%.',
    paperLink: 'https://doi.org/10.48550/arXiv.2411.05851',
    status: 'past',
  },
  // Add more projects as needed
];

function ProjectLinks({ project }) {
  const links = [];
  if (project.conferenceLink && project.conference) {
    links.push({
      href: project.conferenceLink,
      label: project.status === 'current'
        ? `Accepted at ${project.conference}`
        : `Published at IEEE ${project.conference}`,
    });
  }
  if (project.paperLink) links.push({ href: project.paperLink, label: 'View paper' });

  return (
    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
      {links.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-link">
          {link.label}
        </a>
      ))}
    </div>
  );
}

function ResearchRow({ project }) {
  return (
    <article className="grid gap-3 py-4 sm:grid-cols-[144px_minmax(0,1fr)] sm:gap-5">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width="144"
          height="100"
          className="h-24 w-36 rounded-sm border border-slate-200 bg-slate-50 object-contain"
        />
      )}
      <div className="min-w-0">
        <h4 className="entry-title">{project.title}</h4>
        <div className="body-copy mt-1.5">{project.description}</div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function Research() {
  const groups = [
    { status: 'current', title: 'Current projects' },
    { status: 'past', title: 'Past projects' },
  ];

  return (
    <section id="research" className="section-shell">
      <div className="page-shell">
        <h2 className="section-title">Research & publications</h2>
        <p className="section-intro">ML4SE, applied NLP, and generative AI systems, with a focus on evaluation and reliability.</p>
        {groups.map((group) => (
          <div key={group.status} className="mt-4">
            <h3 className="section-kicker border-b border-slate-300 pb-2">{group.title}</h3>
            <div className="divide-y divide-slate-200">
              {researchProjects.filter((project) => project.status === group.status).map((project) => (
                <ResearchRow key={project.title} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Research;
