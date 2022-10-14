import { User } from '../types/user';
import api from './api';

const AUTH_ENDPOINT = 'auth';

export const adminLoginAuth = async (
  email: string,
  password: string
): Promise<User | undefined> => {
  try {
    const res = await api.post(`${AUTH_ENDPOINT}/signin`, {
      email,
      password,
    });
    const admin = res.data;

    return admin;
  } catch (err) {
    console.log(err);
  }
};

export const validateAuth = async (token: string) => {
  try {
    const res = await api.get(`${AUTH_ENDPOINT}/validate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const validateResponseData = res.data;

    return validateResponseData;
  } catch (err) {
    console.log(err);
  }
};
