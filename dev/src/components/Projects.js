import React from 'react';
import llmGameTheoryImage from '../assets/projects/llmgametheory_gif.gif';
import ghostNetImage from '../assets/projects/ghostnet.png';
import argueAiImage from '../assets/projects/argueai.png';
import openWorldImage from '../assets/projects/open_world.webp';

const OpenSourceProjects = () => {
  const projects = [
    {
      title: 'Open World',
      image: openWorldImage,
      imageAlt: 'Open World game scene on C Street in Davis, California',
      description: 'A third-person browser game that turns real map data into explorable streets, with driving, traffic, and live weather.',
      link: 'https://github.com/muhammad-hassnain/open-world',
      demoLink: 'https://open-world-sigma-two.vercel.app/',
      status: 'Current project',
    },
    {
      title: 'LLMGameTheory',
      image: llmGameTheoryImage,
      description: 'A simulation of the Iterated Prisoner’s Dilemma using LLM agents with memory-driven strategic behavior.',
      link: 'https://github.com/FaizanFaisal25/LLMGameTheory',
    },
    {
      title: 'GhostNet',
      image: ghostNetImage,
      description: 'A social media platform simulation driven by LLM agents and inspired by the Dead Internet Theory.',
      link: 'https://github.com/FaizanFaisal25/GhostNet',
    },
    {
      title: 'ArgueAI',
      image: argueAiImage,
      description: 'A debate system where two AI agents argue using search and language model tools.',
      link: 'https://github.com/FaizanFaisal25/ArgueAI',
    },
  ];

  return (
    <section className="section-shell" id="open-source-projects">
      <div className="page-shell">
        <h2 className="section-title">Open source projects</h2>
        <div className="mt-2 grid gap-x-7 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="grid grid-cols-[88px_minmax(0,1fr)] items-start gap-3 border-b border-slate-200 py-4 sm:grid-cols-[112px_minmax(0,1fr)]">
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                loading="lazy"
                width="112"
                height="80"
                className="aspect-[7/5] w-full rounded-sm border border-slate-200 bg-slate-50 object-cover"
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="entry-title">{project.title}</h3>
                  {project.status && <span className="meta-label">{project.status}</span>}
                </div>
                <p className="body-copy mt-1">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {project.demoLink && (
                    <a href={project.demoLink} className="text-link" target="_blank" rel="noopener noreferrer">
                      Play live demo
                    </a>
                  )}
                  <a href={project.link} className="text-link" target="_blank" rel="noopener noreferrer">
                    View repository
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceProjects;
