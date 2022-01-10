import React, { FC } from 'react';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import useAuth from '../../hooks/useAuth';

const Home: FC = () => {
  const { logoutHandler } = useAuth();

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={logoutHandler}>Logout</Button>
    </Card>
  );
};

export default Home;
