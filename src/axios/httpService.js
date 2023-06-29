import axios from 'axios';
import constants from '../constant/routesConstant';
import { store } from '../store';

const { backendURL } = constants;

export const httpCall = async (
  url,
  method = 'GET',
  data = null,
  params = {},
) => {
  const apiUrl = backendURL + url;

  const state = store.getState().auth;

  const authToken = state.token;

  try {
    const response = await axios({
      method: method,
      url: apiUrl,
      data,
      params,
      headers: {
        Authorization: `${authToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    // throw error.response;
    throw error;
  }
};
