import React from 'react';

interface ProgressBarProps {
  width: string;
  progressColor?: string;
  backgroundColor?: string;
}

const ProgressBar = ({
  width,
  progressColor = 'bg-[#0ea5e9]',
  backgroundColor = 'bg-[#334155]',
}: ProgressBarProps) => {
  return (
    <div className={`w-full h-1 ${backgroundColor} rounded-sm`}>
      <div className={`h-full ${width} ${progressColor} rounded-sm`}></div>
    </div>
  );
};

export default ProgressBar;
