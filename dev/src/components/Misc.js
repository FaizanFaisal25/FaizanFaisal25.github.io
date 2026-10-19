import React from 'react';
import NNAnimation from './NNAnimation';
import AcademicLineage from './AcademicLineage';

function Misc() {
  return (
    <section id="misc" className="section-shell">
      <div className="page-shell">
        <h2 className="section-title">Miscellaneous</h2>
        <blockquote className="quote-text mt-3 border-b border-slate-200 pb-3">
          “The more you know, the more you realize you don’t know.”
          <cite className="meta-label ml-2 not-italic">— Aristotle</cite>
        </blockquote>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <article>
            <h3 className="entry-title">Recent reading</h3>
            <ul className="body-copy mt-2 space-y-3">
              <li>
                <a href="https://www.goodreads.com/book/show/117047.The_Blind_Watchmaker" target="_blank" rel="noopener noreferrer" className="text-link">
                  The Blind Watchmaker
                </a>
                <p className="mt-1 text-slate-600">Evolution, complexity, and how natural selection shapes life on Earth.</p>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/41817484-the-case-against-reality" target="_blank" rel="noopener noreferrer" className="text-link">
                  The Case Against Reality
                </a>
                <p className="mt-1 text-slate-600">An exploration of perception and our experience of reality.</p>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="entry-title">A small discovery</h3>
            <p className="body-copy mt-2">
              While exploring my academic lineage through Prem Devanbu, I came
              across Newton, Euler, and a few other names from my textbooks.
              That was a fun surprise.
            </p>
            <AcademicLineage />
          </article>
          <article>
            <h3 className="entry-title">A neural network in motion</h3>
            <p className="body-copy mt-2">A tiny network working through the XOR problem.</p>
            <div className="mt-2 max-w-xs"><NNAnimation /></div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Misc;
