import { useAuthContext } from '../store/auth-context';

const useAuth = (): {
  loginHandler: () => void;
  logoutHandler: () => void;
} => {
  const { setIsLoggedIn } = useAuthContext();

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return { loginHandler, logoutHandler };
};

export default useAuth;
