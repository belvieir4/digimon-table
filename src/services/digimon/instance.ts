import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://digimon-api.vercel.app/api/',
});
