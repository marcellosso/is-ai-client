import { Cookies } from 'react-cookie';
import { PreviousAnswerLevel } from '../types/level';
import api from './api';

const LEVEL_ENDPOINT = 'info';

const cookies = new Cookies();

export const getAllLevels = async () => {
  try {
    const res = await api.get(`${LEVEL_ENDPOINT}/`);
    const levels = res.data;

    return levels;
  } catch (err) {
    console.log(err);
  }
};

export const updateLevelsAnswers = async (answers: PreviousAnswerLevel[]) => {
  try {
    await api.post(`${LEVEL_ENDPOINT}/answers/`, answers);
  } catch (err) {
    console.log(err);
  }
};

export const createLevel = async (data: FormData) => {
  try {
    const token = cookies.get('authtoken');

    const newLevel = await api.post(`${LEVEL_ENDPOINT}/`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    return newLevel;
  } catch (err) {
    console.log(err);
  }
};

export const createBulkLevels = async (data: FormData) => {
  try {
    const token = cookies.get('authtoken');

    await api.post(`${LEVEL_ENDPOINT}/bulk`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
