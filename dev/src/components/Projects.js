import React from 'react';

const OpenSourceProjects = () => {
  const projects = [
    {
      title: 'LLMGameTheory',
      description: 'A simulation of the Iterated Prisoner’s Dilemma using Large Language Model (LLM) agents that store and utilize interaction history to inform strategic decisions, exploring the dynamics of cooperation.',
      link: 'https://github.com/FaizanFaisal25/LLMGameTheory',
    },
    {
      title: 'GhostNet',
      description: 'GhostNet - A Social Media Platform Simulation Using LLM Agents Inspired by the Dead Internet Theory.',
      link: 'https://github.com/FaizanFaisal25/GhostNet',
    },
    {
      title: 'ArgueAI',
      description: 'ArgueAI is a tool that simulates debates between two AI agents using search engine and language model technologies.',
      link: 'https://github.com/FaizanFaisal25/ArgueAI',
    },
    {
      title: 'bert-sst-finetune',
      description: 'This repository focuses on fine-tuning a BERT uncased base model using the Stanford Sentiment Treebank dataset (SST-2) to achieve sentiment analysis.',
      link: 'https://github.com/FaizanFaisal25/bert-sst-finetune',
    },
    {
      title: 'Castorini Reproduction',
      description: (
        <span>
          Reproduced the results of{' '}
          <a
            href="https://cs.uwaterloo.ca/~jimmylin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Professor Jimmy Lin
          </a>{' '}
          (University of Waterloo) Information Retrieval libraries, Anserini and Pyserini.
        </span>
      ),
      link: 'https://github.com/castorini/pyserini/pull/1930', // Replace with the actual link
    },
  ];

  return (
    <section className="container mx-auto px-6 py-10" id="open-source-projects">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Open Source Projects</h2>
      <ul className="list-disc pl-5 space-y-4 text-gray-600">
        {projects.map((project, index) => (
          <li key={index}>
            <div className="flex items-center space-x-2">
              <a
                href={project.link}
                className="text-blue-600 hover:underline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-2xl font-semibold mb-2">{project.title}</span>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                  alt="GitHub Logo" 
                  className="w-5 h-5 ml-1" 
                />
              </a>
            </div>
            <p className="text-gray-500 mt-1">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OpenSourceProjects;
