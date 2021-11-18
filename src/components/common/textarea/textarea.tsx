import clsx from 'clsx';
import React, { forwardRef, TextareaHTMLAttributes } from 'react';

interface IPropsTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}
export const Textarea = forwardRef(
  (props: IPropsTextarea, ref: React.Ref<HTMLTextAreaElement>) => {
    const { error, ...restProps } = props;
    const className = clsx(
      'inputStyle',
      props.className && props.className,
      error && 'error'
    );

    return <textarea {...restProps} ref={ref} className={className} />;
  }
);
