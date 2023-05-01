import { useEffect, useState } from 'react';
import LoginContext from './LoginContext';
import axios from 'axios';
import constants from '../constant/routesConstant';

const { backendURL } = constants;
function LoginProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn'),
  );
  const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken'));

  useEffect(() => {
    if (jwtToken !== 'null') {
      localStorage.setItem('jwtToken', jwtToken);
      localStorage.setItem('isLoggedIn', isLoggedIn);
    }
  }, [jwtToken, isLoggedIn]);

  const login = (username, password) => {
    axios
      .post(`${backendURL}login.php`, { username, password })
      .then((res) => {
        setIsLoggedIn(true);
        setJwtToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  };

  const logout = () => {
    console.log('I am herre sndnn');
    localStorage.removeItem('jwtToken');
    setJwtToken(null);
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, jwtToken, login, logout }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
