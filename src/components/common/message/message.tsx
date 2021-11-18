import clsx from 'clsx';
import React, { useMemo } from 'react';

enum EMessage {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

type TMessage = 'success' | 'error' | 'warning' | 'info';

interface IPropsMessage {
  type: TMessage;
  content: string;
  className?: string;
}

export const Message = ({ content, type, className }: IPropsMessage) => {
  const classType = useMemo(() => {
    let color;
    switch (type) {
      case EMessage.SUCCESS:
        color = 'text-blue-500';
        break;
      case EMessage.ERROR:
        color = 'text-red-500';
        break;
      case EMessage.WARNING:
        color = 'text-orange-500';
        break;
      case EMessage.INFO:
        color = 'text-blue-100';
        break;
      default:
        break;
    }
    return color;
  }, [type]);

  const classMessage = clsx(classType && classType, className && className);
  return <span className={classMessage}>{content}</span>;
};
