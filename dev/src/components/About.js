// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section className="container mx-auto px-6 py-10" id="about">
      <h2 className="text-4xl font-bold text-black mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row">
        {/* About Information Column */}
        <div className="md:w-full">
        <p className="text-gray-600 leading-relaxed mb-4">
          I am both a researcher and an engineer, committed to advancing the field of NLP. I am a current graduate student in Computer Science at the <a 
              href="https://cs.ucdavis.edu/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
          >
              University of California, Davis
          </a>. My passion lies in both theoretical research and practical engineering applications.
        </p>

          <p className="text-gray-600 leading-relaxed mb-4">
          My research interests include, but are not limited to, the following key areas, listed in no particular order:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
          <li> <strong>Multi-Agent Systems for Generative AI:</strong> Investigating collaborative behaviors among LLM-based agents, including game-theoretic approaches, with integration of Retrieval-Augmented Generation (RAG) techniques to enhance information access and decision-making processes. </li>
            <li>
              <strong>Security in Large Language Models:</strong> Exploring vulnerabilities and developing protective strategies for LLMs.
            </li>
            <li>
              <strong>Natural Language Processing for Low-Resource Environments:</strong> Creating methodologies for NLP in constrained settings.
            </li>
            <li>
            <strong>NLP-based Generative AI Applications:</strong> These applications focus on high-impact sectors like medicine, healthcare, and finance.
            </li>
            <li>
              <strong>Human-Centered NLP and HCI:</strong> Advancing the integration of NLP and generative AI into interactive systems, emphasizing usability, transparency, and adaptability to human needs in collaborative and assistive contexts.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
