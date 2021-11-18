import React, { FC } from 'react';
import ReactLoading from 'react-loading';

type LoadingType =
  | 'blank'
  | 'balls'
  | 'bars'
  | 'bubbles'
  | 'cubes'
  | 'cylon'
  | 'spin'
  | 'spinningBubbles'
  | 'spokes';
interface IPropsLoading {
  type?: LoadingType;
  color?: string;
  delay?: number;
  height?: number;
  width?: number;
  className?: string;
}

export const Loading: FC<IPropsLoading> = ({
  type = 'spin',
  color = 'rgb(33, 150, 243)',
  height,
  width,
  className,
}) => {
  return (
    <ReactLoading
      type={type}
      color={color}
      height={height}
      width={width}
      className={className}
    />
  );
};
