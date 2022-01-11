import React from 'react';

import { AuthContextProvider } from './store/auth-context';
import Main from './components/pages/Main';

const App = () => {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
};

export default App;
