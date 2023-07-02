import { httpCall } from '../../../axios/httpService';

const userDetails = async () => {
  const response = await httpCall(`user.php`, 'GET', {}, {});
  return response;
};

const userService = {
  userDetails,
};

export default userService;
