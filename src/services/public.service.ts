import axios from 'axios';
import { Client } from '../models/client.model';

type ClientPet = {
  id: string
  name: string
  empresa: string
  email : string
  notas: string 
}

const clientApi = axios.create({
  baseURL: 'https://appclientsnode.onrender.com/api/',
  // baseURL: 'http://localhost:8080/api/',
  headers: {
    "Content-type": "application/json"
  }
})

export const getClientsAll = async ()  =>  {
  const resp =  await clientApi.get<Client[]>('getClientsAll')
  return resp.data;
}

export const createClient = async (client: ClientPet) => {
  return await clientApi.post('createClient', client);
};

export const updateclient = async (client: ClientPet) => {
  return clientApi.put(`updateClient/${client.id}`, client);
};

export const deleteclient = async (id: string) => {
  return clientApi.delete(`deleteClient/${id}`);
};