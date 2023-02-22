import React from 'react';
import './Range.scss';

export const Range = (props) => {

  const { min, max, step } = props;
  const { value, setValue } = props;

  const inputHandler = (event) => {
    setValue(event.currentTarget.value);
  }

  return (
    <div className='range'>
      <input 
        min={min} 
        max={max} 
        step={step} 
        type="number"
        value={value}
        className="range__input-number" 
        onChange={(e) => inputHandler(e)}
      />
      <input 
        min={min} 
        max={max} 
        step={step} 
        type="range"
        className="range__input-range" 
        value={value} 
        onChange={(e) => inputHandler(e)}
      />
    </div>
  )
}
