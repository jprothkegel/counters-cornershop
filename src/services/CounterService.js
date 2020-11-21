import axiosInstance from './Axios';

export const callGetCounters = () => {
  return axiosInstance({
    url: '/counter',
    method: 'get',
  });
};

export const callCreateCounter = (title) => {
  return axiosInstance({
    url: '/counter',
    method: 'post',
    data: { title },
  });
};

export const callIncCounter = (id) => {
  return axiosInstance({
    url: '/counter/inc',
    method: 'post',
    data: { id },
  });
};

export const callDecCounter = (id) => {
  return axiosInstance({
    url: '/counter/dec',
    method: 'post',
    data: { id },
  });
};

export const callDelCounter = (id) => {
  return axiosInstance({
    url: '/counter',
    method: 'delete',
    data: { id },
  });
};
