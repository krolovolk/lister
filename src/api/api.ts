import axios, { AxiosResponse } from "axios";

export const listUsers = {
  async getUsers(): Promise<AxiosResponse<any>> {
    return axios.get('https://jsonplaceholder.typicode.com/users', {});
  }
};