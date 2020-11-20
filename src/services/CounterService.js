import axiosInstance from './Axios';

export const callGetCounters = () => {
  return axiosInstance({
    url: '/counter',
    method: 'get',
  });
};
