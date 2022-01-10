import { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as AuthContextType);

export const useAuthContext = (): AuthContextType => useContext(AuthContext);
