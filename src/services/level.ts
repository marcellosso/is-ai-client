import axios from 'axios';

const LEVEL_ENDPOINT = 'info/';

export const getAllLevels = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${LEVEL_ENDPOINT}`
    );
    const levels = res.data;

    return levels;
  } catch (err) {
    console.log(err);
  }
};
