import React, { FC } from 'react';
import { useAuthContext } from '../../store/auth-context';

import classes from './Navigation.module.css';

interface Props {
  onLogout: () => void;
}

const Navigation: FC<Props> = (props) => {
  const { isLoggedIn } = useAuthContext();
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
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
