import { createContext } from 'react';

const LoginContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export default LoginContext;
