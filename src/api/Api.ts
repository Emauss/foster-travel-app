import axios from 'axios';
import { INews } from '../interfaces/api/INews';

export const getNews = async (country: string | undefined, pageSize: number | undefined): Promise<INews> => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}?country=${country}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_TOKEN}`)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
