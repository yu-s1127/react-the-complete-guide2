import React, { FC } from 'react';
import useAuth from '../../hooks/useAuth';
import { useAuthContext } from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation: FC = () => {
  const { isLoggedIn } = useAuthContext();
  const { logoutHandler } = useAuth();

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
