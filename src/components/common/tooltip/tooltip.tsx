import React from 'react';
import ReactTooltip, { TooltipProps } from 'react-tooltip';

export const ToolTip: React.FC<TooltipProps> = (props) => {
  return <ReactTooltip {...props} />;
};
