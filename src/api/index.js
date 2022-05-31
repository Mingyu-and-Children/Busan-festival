import request from './requests';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '27684548-5114f036e3f599d57c3f075f4';
const defaultParam = {
  key: API_KEY,
};

// const test = {
//  q: 'spring',
// };
const getImages = async (paramObj) => {
  console.log(paramObj);
  const params = new URLSearchParams({
    ...defaultParam,
    ...paramObj,
  }).toString();
  const data = await request(`${BASE_URL}?${params}`);
  return data;
};

export default getImages;
