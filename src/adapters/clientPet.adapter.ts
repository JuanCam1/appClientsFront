import { Client } from '../models/client.model';

export const clientPetAdapter = (client: Client) => {
  
    const { id, nombre : name, empresa, email, notas } = client;

    const clientPet = {
      id,
      name,
      empresa,
      email,
      notas,
    }
    
    return clientPet
 ;

};
