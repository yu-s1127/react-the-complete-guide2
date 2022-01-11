import React, { FC, InputHTMLAttributes } from 'react';

import classes from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean | null;
  label?: string;
}

const Input: FC<Props> = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...props} />
    </div>
  );
};

export default Input;
