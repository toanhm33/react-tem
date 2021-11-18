import React, { forwardRef, InputHTMLAttributes } from 'react';
import './styles.css';

interface IPropsSwitch extends InputHTMLAttributes<HTMLInputElement> {
  check?: boolean;
}

export const Switch = forwardRef(
  (props: IPropsSwitch, ref: React.Ref<HTMLInputElement>) => {
    const [isChecked, setChecked] = React.useState(props.check ?? true);
    return (
      <div className="w-full">
        <label htmlFor="toogleA" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toogleA"
              type="checkbox"
              className="sr-only"
              defaultChecked={isChecked}
              onChange={() => {
                setChecked((pre) => !pre);
              }}
              ref={ref}
              {...props}
            />
            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
            <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition" />
          </div>
        </label>
      </div>
    );
  }
);
