import axios from 'axios';
import qs from 'qs';

const initAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  axios.defaults.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  };

  axios.interceptors.response.use(null, (error) => {
    console.groupCollapsed(
      `%c🚩 ${error.message}`,
      'background: #FAFAFA; color: red; font-size: 14px;',
    );
    console.error(error);
    console.groupEnd();
    return Promise.reject(error);
  });
};

export default initAxios;
