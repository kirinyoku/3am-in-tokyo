import React from 'react';
import './Button.scss';

export const Button = (props) => {
  return (
    <button className='button' {...props}>
      {props.children}
    </button>
  )
}
