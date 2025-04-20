import React from 'react';
import NNAnimation from './NNAnimation';

function Misc() {
  return (
    <section id="misc" className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-8 text-black">Miscellaneous</h2>

      <ul className="list-disc pl-5 space-y-4 text-gray-800">
        <li>
          <strong className="text-gray-800">
            Two books I recently read and enjoyed (I read non-fiction):
          </strong>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong className="text-gray-800">
                <a
                  href="https://www.goodreads.com/book/show/117047.The_Blind_Watchmaker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  The Blind Watchmaker
                </a>
              </strong>
              <p className="text-gray-600 mt-1">
                A compelling exploration of evolution and complexity, this book delves into how natural selection shapes life on Earth.
              </p>
            </li>
            <li>
              <strong className="text-gray-800">
                <a
                  href="https://www.goodreads.com/book/show/41817484-the-case-against-reality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  The Case Against Reality
                </a>
              </strong>
              <p className="text-gray-600 mt-1">
                This book challenges our understanding of perception, arguing that our experiences of reality might be a mere illusion.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <strong className="text-gray-800">Favourite Quote:</strong>
          <p className="text-gray-600 mt-1">
            <em>"The more you know, the more you realize you don’t know."</em> – Aristotle
          </p>
        </li>

        <li>
          <strong className="text-gray-800">
            A random neural network animation created with JavaScript (not an image / gif) that I like:
          </strong>
          <p className="text-gray-600 mt-1">
            Below is an interactive canvas rendering of the animation:
          </p>
          <div
            className="mt-4 mx-auto block"
            style={{ width: '40%', height: '40%' }}
          >
            <NNAnimation />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Misc;
