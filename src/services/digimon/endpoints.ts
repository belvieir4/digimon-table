import { instance } from './instance';
import { Digimon, GetAllResponse, GetAllArgs } from './types';

export const endpoints = {
  getAll: async (args?: GetAllArgs) => {
    const response = await instance.get<GetAllResponse>('/digimon', {
      params: args,
    });
    return response.data;
  },
  getByName: async (id: string) => {
    const response = await instance.get<Digimon>(`/digimon/${id}`);
    return response.data;
  },
};
