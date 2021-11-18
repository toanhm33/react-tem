import clsx from 'clsx';
import React, { forwardRef, SelectHTMLAttributes, useMemo } from 'react';
import { BiChevronDown } from 'react-icons/bi';
interface IPropsDropdown extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

type Option = {
  key: string;
  value: string;
  id: number;
  props?: {};
};

export const Dropdown = forwardRef(
  (props: IPropsDropdown, ref: React.Ref<HTMLSelectElement>) => {
    const listOption = useMemo(() => {
      return (
        props.options &&
        props.options.map(({ id, key, value, props }) => (
          <option key={id} className="mt-10" value={value} {...props}>
            {key}
          </option>
        ))
      );
    }, [props.options]);
    const className = clsx(
      ' w-full appearance-none outline-none padding-df pr-7 text-gray-700 border-gray-400 border  border-round-df hover:border-gray-300 focus:outline-none ',
      props.className && props.className
    );

    return (
      <div className="flex items-center relative w-full">
        <select {...props} ref={ref} className={className}>
          {listOption}
        </select>
        <BiChevronDown className=" text-gray-500 text-2xl absolute right-1 sm:top-3" />
      </div>
    );
  }
);
