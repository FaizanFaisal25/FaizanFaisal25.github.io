import React from 'react';

const Contact = () => (
  <section className="section-shell" id="contact">
    <div className="page-shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
      <div>
        <h2 className="section-title">Contact</h2>
        <p className="section-intro">Research, software engineering, and thoughtful applications of AI.</p>
      </div>
      <div className="text-sm">
        <a href="mailto:fznfaisal@ucdavis.edu" className="text-link">fznfaisal@ucdavis.edu</a>
        <div className="mt-2 flex gap-4">
          <a href="https://github.com/FaizanFaisal25" target="_blank" rel="noopener noreferrer" className="text-link">GitHub</a>
          <a href="https://linkedin.com/in/faizan-faisal25" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
