import React from 'react';

const NNAnimation = () => {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950">
      <iframe
        title="Neural Network Animation"
        src={`${process.env.PUBLIC_URL}/nn.html`}
        className="absolute inset-0 h-full w-full border-0"
        scrolling="no"
      />
    </div>
  );
};

export default NNAnimation;
