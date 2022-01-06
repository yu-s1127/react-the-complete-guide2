import React, { FC, HTMLAttributes } from 'react';

import classes from './Card.module.css';

const Card: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
