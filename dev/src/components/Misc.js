import React from 'react';
import NNAnimation from './NNAnimation';

function Misc() {
  return (
    <section id="misc" className="section-shell border-t border-slate-200 dark:border-slate-800">
      <div className="page-shell">
        <p className="section-kicker">Miscellaneous</p>
        <h2 className="section-title">A few extra interests</h2>
        <p className="section-intro">
          A small window into the books, ideas, and visual curiosities that I keep returning to.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <article data-reveal="card" className="surface-card p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-slate-950 dark:text-slate-50">
                Books I recently enjoyed
              </h3>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/80">
                  <a
                    href="https://www.goodreads.com/book/show/117047.The_Blind_Watchmaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-base font-semibold"
                  >
                    The Blind Watchmaker
                  </a>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    A compelling exploration of evolution and complexity, focusing
                    on how natural selection shapes life on Earth.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/80">
                  <a
                    href="https://www.goodreads.com/book/show/41817484-the-case-against-reality"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-base font-semibold"
                  >
                    The Case Against Reality
                  </a>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    A provocative argument that our direct experience of reality
                    may be more constructed than it appears.
                  </p>
                </div>
              </div>
            </article>

            <article data-reveal="card" className="surface-card p-6 sm:p-7">
              <span className="meta-chip">Favorite quote</span>
              <blockquote className="mt-4 text-lg font-medium leading-8 text-slate-900 dark:text-slate-100">
                "The more you know, the more you realize you don’t know."
              </blockquote>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Aristotle</p>
            </article>
          </div>

          <article data-reveal="card" className="surface-card p-6 sm:p-7">
            <span className="meta-chip">Interactive</span>
            <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-slate-50">
              Neural network animation
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              A JavaScript-based visual that I like because it captures the motion
              and structure of layered systems without reducing them to a static image.
            </p>
            <div className="mt-6">
              <NNAnimation />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Misc;
