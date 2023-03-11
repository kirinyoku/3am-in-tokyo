import React from 'react';
import './Select.scss';

const Select = (props) => {
  const { options, onChange, defaultValue } = props;

  return (
    <select className="select" onChange={onChange} defaultValue={defaultValue}>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

export default Select;
