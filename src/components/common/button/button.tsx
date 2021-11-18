import clsx from 'clsx';
import React, { ButtonHTMLAttributes, useMemo } from 'react';
import { Loading } from '../loading/loading';

enum EButton {
  SUCCESS = 'success',
  ERROR = 'error',
}

type TButton = 'error' | 'success';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  typestatus: TButton;
  isLoading?: boolean;
}

export const Button: React.FC<IButton> = (props) => {
  const { isLoading, ...restProps } = props;
  const classColor = useMemo(() => {
    let color;
    switch (props.typestatus) {
      case EButton.SUCCESS:
        color = 'btn-success';
        break;
      case EButton.ERROR:
        color = 'btn-error';
        break;
      default:
        break;
    }
    return color;
  }, [props.typestatus]);

  const className = clsx(
    'btn flex flex-row items-center',
    classColor && classColor,
    props.className && props.className,
    props.disabled && 'opacity-50 cursor-not-allowed'
  );
  return (
    <button {...restProps} className={className}>
      {isLoading && (
        <Loading width={25} height={25} className="mr-2" color="#fff" />
      )}
      {props.children}
    </button>
  );
};
