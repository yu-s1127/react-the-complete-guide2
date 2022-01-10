import React, { FC } from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import { useAuthContext } from '../../store/auth-context';

const MainHeader: FC = () => {
  const { setIsLoggedIn } = useAuthContext();

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={logoutHandler} />
    </header>
  );
};

export default MainHeader;
