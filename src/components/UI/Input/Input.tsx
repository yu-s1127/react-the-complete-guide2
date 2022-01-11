import React, { InputHTMLAttributes } from 'react';

import classes from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean | null;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  // TypeScriptのコンパイラがエラーを発するのでこの実装方法の確認は後回し
  // const inputRef = useRef<HTMLInputElement>(null);
  // const activate = () => {
  //   inputRef.current?.focus();
  // };
  // useImperativeHandle(ref, () => {
  //   return {
  //     focus: activate,
  //   };
  // });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input ref={ref} {...props} />
    </div>
  );
});

export default Input;
