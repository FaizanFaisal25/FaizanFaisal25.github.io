import React from 'react';
import NNAnimation from './NNAnimation';

function Misc() {
  return (
    <section id="misc" className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold mb-8">Miscellaneous</h2>

      <ul className="list-disc pl-6 text-lg">

        <li className="mb-4">
          <strong>Two Books I recently read and enjoyed (I read non-fiction):</strong>
          <ul className="list-disc pl-6 mt-2">
            <li className="mb-2">
              <strong>
                <a 
                  href="https://www.goodreads.com/book/show/117047.The_Blind_Watchmaker" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500"
                >
                  The Blind Watchmaker
                </a>
              </strong> 
              - A compelling exploration of evolution and complexity, this book delves into how natural selection shapes life on Earth.
            </li>
            <li className="mb-2">
              <strong>
                <a 
                  href="https://www.goodreads.com/book/show/41817484-the-case-against-reality" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500"
                >
                  The Case Against Reality
                </a>
              </strong> 
              - This book challenges our understanding of perception, arguing that our experiences of reality might be a mere illusion.
            </li>
          </ul>
        </li>

        <li>
      <strong>A random neural network animation created with JavaScript (not an image / gif) that I like:</strong>
        <div className="mt-0" style={{ width: '40%', height: '40%', margin: '0 auto', display: 'block' }}>
          <NNAnimation />
        </div>
      </li>

      </ul>
    </section>
  );
}

export default Misc;
