'use strict';
import axios from 'axios';
import { store } from '~/store/store';
import { IMRoutes } from '~/config/routes';
import { clearUser } from '~/store/features/userSlice';
import { BASE_URL, XApiToken } from '~/config/constants';
import { navigationRef } from '~/navigation/RootNavigation';

const AxiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
    'X-API-TOKEN': XApiToken,
    'Content-Type': 'application/json',
  },
  baseURL: BASE_URL,
  timeout: 10000,
});

AxiosInstance.interceptors.request.use(request => {
  const access_token = store.getState()?.user.accessToken ?? '';
  if (access_token !== '') {
    request.headers.Authorization = `Bearer ${access_token}`;
  }
  return request;
});

AxiosInstance.interceptors.response.use(
  res => res,
  error => {
    let errorObj;
    if (error.response) {
      errorObj = JSON.parse(JSON.stringify(error.response));
    } else {
      errorObj = JSON.parse(JSON.stringify(error));
    }
    if (errorObj.status === 401) {
      store.dispatch(clearUser());
      if (navigationRef.isReady()) {
        navigationRef.reset({
          index: 0,
          routes: [{ name: IMRoutes.Home }],
        });
      }
      throw errorObj;
    } else {
      throw errorObj;
    }
  },
);

export default AxiosInstance;
