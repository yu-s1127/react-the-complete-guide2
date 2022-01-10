import React, { FC } from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader: FC = () => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
