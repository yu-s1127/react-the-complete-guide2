import React, { useEffect } from 'react';

import Login from '../Login/Login';
import Home from '../Home/Home';
import MainHeader from '../MainHeader/MainHeader';
import { useAuthContext } from '../../store/auth-context';

const Main = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();

  useEffect(() => {
    const storagedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storagedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
};

export default Main;
