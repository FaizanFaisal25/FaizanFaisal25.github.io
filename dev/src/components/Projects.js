import React from 'react';
import { FaGithub } from 'react-icons/fa';
import llmGameTheoryImage from '../assets/projects/llmgametheory_gif.gif';
import ghostNetImage from '../assets/projects/ghostnet.png';
import argueAiImage from '../assets/projects/argueai.png';

const OpenSourceProjects = () => {
  const projects = [
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
    <section className="section-shell border-t border-slate-200 dark:border-slate-800" id="open-source-projects">
      <div className="page-shell">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Open source work</h2>
        <p className="section-intro">
          Selected repositories exploring LLM agents, debate systems, and collaborative AI behavior.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article key={index} data-reveal="card" className="surface-card flex h-full flex-col p-6 sm:p-7">
              {project.image && (
                <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-44 w-full object-cover object-center"
                  />
                </div>
              )}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-slate-50">{project.title}</h3>
                <FaGithub className="mt-1 shrink-0 text-lg text-slate-400 dark:text-slate-500" />
              </div>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <a
                href={project.link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View repository
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceProjects;
