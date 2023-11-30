import { instance } from './instance';
import { Digimon } from './types';

export const endpoints = {
  getAll: async () => {
    const response = await instance.get<Digimon[]>('/digimon');
    return response.data;
  },
  getByName: async (name: string) => {
    const response = await instance.get<Digimon[]>(`/digimon/name/${name}`);
    return response.data[0];
  },
};
