import React from 'react';
import './Select.scss';

export const Select = (props) => {

  const { options } = props;
  const {value, setValue } = props;

  const selectHandler = (event) => {
    setValue(event.currentTarget.value);
  }

  return (
    <select className='select' onChange={(e) => selectHandler(e)} defaultValue={value}>
      {options.map((option, index) => {
        return (
          <option key={index}>
            {option}
          </option>);
      })}
    </select>
  )
}
