import { options } from './constants';

export const getAllBread = async () => {
  
  const response = await fetch(
    'https://dog-breeds2.p.rapidapi.com/dog_breeds',
    options
  );
  const data = await response.json();

  return data;
};
