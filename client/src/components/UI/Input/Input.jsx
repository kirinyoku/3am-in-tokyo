import React from 'react';
import { forwardRef } from 'react';
import './Input.scss';

const Input = forwardRef((props, ref) => {
  return <input className="input" ref={ref} {...props} />;
});

export default Input;
