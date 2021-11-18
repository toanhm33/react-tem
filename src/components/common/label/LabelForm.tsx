import clsx from 'clsx';
import React, { LabelHTMLAttributes } from 'react';

export const Label: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = (
  props
) => {
  const className = clsx(
    'text-sm text-gray-600 mb-2',
    props.className && props.className
  );
  return (
    <label {...props} className={className}>
      {props.children}
    </label>
  );
};
