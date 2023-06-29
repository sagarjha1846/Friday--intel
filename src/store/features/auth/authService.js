import axios from 'axios';
import constants from '../../../constant/routesConstant';
const { backendURL } = constants;

const login = async (userData) => {
  let { username, password } = userData;
  const response = await axios.post(`${backendURL}login.php`, {
    username,
    password,
  });
  return response.data;
};

const logout = async () => {
  try {
    localStorage.clear();
    return { success: true, message: '' };
  } catch (error) {
    return {
      success: false,
      message: 'LOGOUT FAIL',
    };
  }
};

const authService = {
  login,
  logout,
};

export default authService;
