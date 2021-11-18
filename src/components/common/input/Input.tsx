import clsx from 'clsx';
import React, { forwardRef, InputHTMLAttributes } from 'react';

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef(
  (props: IPropsInput, ref: React.Ref<HTMLInputElement>) => {
    const { error, ...restProps } = props;
    const className = clsx(
      'inputStyle',
      props.className && props.className,
      error && 'error'
    );

    return <input {...restProps} ref={ref} className={className} />;
  }
);
