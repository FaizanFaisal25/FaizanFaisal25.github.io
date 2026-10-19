import React from 'react';

const NNAnimation = () => {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm border border-slate-200 bg-white">
      <iframe
        title="Neural Network Animation"
        loading="lazy"
        src={`${process.env.PUBLIC_URL}/nn.html`}
        className="absolute inset-0 h-full w-full border-0"
        scrolling="no"
      />
    </div>
  );
};

export default NNAnimation;
