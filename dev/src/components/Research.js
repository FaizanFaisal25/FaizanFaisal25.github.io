import React from 'react';
import collaborativeLearningImage from '../assets/research/IEEE_Paper_Diagram.png';
import soapPaperImage from '../assets/research/soap_paper.png';
import legalUqaImage from '../assets/research/legaluqa.png';
import optimizationProjectImage from '../assets/research/optimization_project.png';

const researchProjects = [
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
    conferenceLink: 'https://autocare.ai/abc2025',
    paperLink: 'https://ieeexplore.ieee.org/document/11118419',
  },
  {
    title: 'When Reasoning Hurts: Source-Aware Evaluation of Frontier LLMs for Clinical SOAP Note Generation',
    image: soapPaperImage,
    description: 'We evaluate whether reasoning and same-source RAG improve SOAP note generation, and find that stronger reasoning does not automatically lead to better clinical documentation.',
    arxivLink: 'https://arxiv.org/abs/2605.24902',
    paperLink: 'https://doi.org/10.48550/arXiv.2605.24902',
    status: 'current',
  },
  {
    title: 'LEGAL-UQA: A Low-Resource Urdu-English Dataset for Legal Question Answering',
    image: legalUqaImage,
    description: "LEGAL-UQA is a low-resource Urdu-English legal QA dataset built from Pakistan's constitution to support domain-specific NLP research and access to legal information.",
    arxivLink: 'https://arxiv.org/abs/2410.13013',
    status: 'past',
  },
  {
    title: 'Distribution Hub Optimization: Application of Conditional P-Median Using Road Network Distances (Final Year Project)',
    image: optimizationProjectImage,
    description: 'This GIS-based logistics study optimized new hub placement for last-mile delivery and reduced average delivery distance by 16%.',
    driveLink: 'https://arxiv.org/abs/2411.05851',
    status: 'past',
  },
  // Add more projects as needed
];

function ProjectLinks({ project }) {
  const links = [];

  if (project.conferenceLink && project.conference) {
    links.push({
      href: project.conferenceLink,
      label:
        project.status === 'current'
          ? `Accepted at ${project.conference}`
          : `Published at IEEE ${project.conference}`,
    });
  }

  if (project.paperLink) {
    links.push({ href: project.paperLink, label: 'View paper' });
  }

  if (project.arxivLink) {
    links.push({ href: project.arxivLink, label: 'View on arXiv' });
  }

  if (project.driveLink) {
    links.push({ href: project.driveLink, label: 'View on arXiv' });
  }

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={`${project.title}-${link.label}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-link"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function ResearchCard({ project, featured = false }) {
  return (
    <article
      data-reveal="card"
      className={`surface-card p-6 sm:p-8 ${
        featured ? 'border-brand-200 bg-gradient-to-br from-brand-50 to-white dark:border-brand-700/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800' : ''
      }`}
    >
      {project.image && (
        <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/60">
          <img
            src={project.image}
            alt={project.title}
            className="h-52 w-full object-cover object-center sm:h-60"
          />
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <span className="meta-chip">
          {project.status === 'current' ? 'Current project' : 'Past project'}
        </span>
        {project.underReview && <span className="meta-chip">Ongoing research</span>}
      </div>
      <h4 className="mt-4 text-xl font-semibold leading-snug text-slate-950 dark:text-slate-50 sm:text-2xl">
        {project.title}
      </h4>
      <ProjectLinks project={project} />
      <div className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
        {project.description}
      </div>
    </article>
  );
}

function Research() {
  const currentProjects = researchProjects.filter(p => p.status === 'current');
  const pastProjects = researchProjects.filter(p => p.status === 'past');

  return (
    <section id="research" className="section-shell border-t border-slate-200 dark:border-slate-800">
      <div className="page-shell">
        <p className="section-kicker">Research</p>
        <h2 className="section-title">Selected research and publications</h2>
        <p className="section-intro">
          My work spans ML4SE, applied NLP, and generative AI systems, with an
          emphasis on evaluation, reliability, and real-world utility.
        </p>

        <div className="mt-10">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                Current projects
              </h3>
            </div>
          </div>
          <div data-reveal="section" className="grid gap-6">
            {currentProjects.map((project, idx) => (
              <ResearchCard key={idx} project={project} featured />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                Past projects
              </h3>
            </div>
          </div>
          <div data-reveal="section" className="grid gap-6 lg:grid-cols-3">
            {pastProjects.map((project, idx) => (
              <ResearchCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;
