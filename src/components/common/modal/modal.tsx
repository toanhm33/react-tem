import React from 'react';
import Popup from 'reactjs-popup';
import { PopupProps } from 'reactjs-popup/dist/types';

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
export const ModalComponent: React.FC<PopupProps> = (props) => {
  return (
    <Popup overlayStyle={overlayStyle} {...props}>
      {props.children}
    </Popup>
  );
};
