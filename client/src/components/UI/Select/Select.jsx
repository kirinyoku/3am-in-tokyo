import React from 'react';
import { forwardRef } from 'react';
import './Select.scss';

const Select = forwardRef((props, ref) => {
  const { options, onChange, defaultValue } = props;

  return (
    <select className="select" ref={ref} onChange={onChange} defaultValue={defaultValue}>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
});

export default Select;
