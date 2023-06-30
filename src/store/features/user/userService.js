import { httpCall } from '../../../axios/httpService';

const userDetails = async () => {
  const response = await httpCall(`user.php`, 'GET', {}, {});
  console.log('res', response);
  return response;
};

const userService = {
  userDetails,
};

export default userService;
