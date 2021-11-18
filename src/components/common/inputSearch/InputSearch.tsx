import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';

export const InputSearch: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const className = clsx(
    'inputSearchStyle',
    props.className && props.className
  );

  return (
    <div className="relative">
      <input type="search" {...props} className={className} />
      <div className="absolute top-0 left-0 inline-flex items-center p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x={0} y={0} width={24} height={24} stroke="none" />
          <circle cx={10} cy={10} r={7} />
          <line x1={21} y1={21} x2={15} y2={15} />
        </svg>
      </div>
    </div>
  );
};
