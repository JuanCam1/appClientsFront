import { Client } from '../models/client.model';

export const clientAdapter = (clients: any) : Client[] => {
  const data = clients.map((cli: any) => {
    const { id, name: nombre, empresa, email, notas } = cli;
    
    return {
      id,
      nombre,
      empresa,
      email,
      notas,
    };
  });

  return data;
};
