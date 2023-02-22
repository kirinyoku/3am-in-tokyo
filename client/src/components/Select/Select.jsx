import React from 'react';
import './Select.scss';

export const Select = (props) => {

  const { options } = props;
  const {scheduler, setScheduler } = props;

  const selectHandler = (event) => {
    setScheduler(event.currentTarget.value);
  }

  return (
    <select className='select' onChange={(e) => selectHandler(e)} defaultValue={scheduler}>
      {options.map((option, index) => {
        return (
          <option key={index}>
            {option}
          </option>);
      })}
    </select>
  )
}
