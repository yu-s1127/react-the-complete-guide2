import React, { FC } from 'react';
import { useAuthContext } from '../../store/auth-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home: FC = () => {
  const { setIsLoggedIn } = useAuthContext();

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={logoutHandler}>Logout</Button>
    </Card>
  );
};

export default Home;
