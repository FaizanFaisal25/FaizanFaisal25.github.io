// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section className="container mx-auto px-6 py-10" id="about">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row">
        {/* About Information Column */}
        <div className="md:w-full">
          <p className="text-gray-600 leading-relaxed mb-4">
            I am both a researcher and an engineer committed to advancing the field of NLP. I completed my undergraduate studies in Computer Science at the 
            Lahore University of Management Sciences (<a 
                href="https://www.lums.edu.pk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline"
            >
                LUMS
            </a>). Currently, I am working full-time at <a 
                href="https://www.systemsltd.com/PK" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline"
            >
                Systems Limited
            </a> (also known as <a 
                href="https://www.visionet.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline"
            >
                Visionet Systems
            </a> in the USA) as a Consultant in the Artificial Intelligence Department. My passion lies in both theoretical research and practical engineering applications.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            My research interests focus on four key areas, listed in no particular order:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>
              <strong>Multi-Agent Systems for Generative AI:</strong> Investigating collaborative behaviors among LLM-based agents, including game-theoretic approaches.
            </li>
            <li>
              <strong>Security in Large Language Models:</strong> Exploring vulnerabilities and developing protective strategies for LLMs.
            </li>
            <li>
              <strong>Natural Language Processing for Low-Resource Environments:</strong> Creating methodologies for NLP in constrained settings.
            </li>
            <li>
              <strong>NLP-based Generative AI Applications:</strong> Focusing on high-impact sectors like medicine and finance.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
