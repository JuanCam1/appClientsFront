import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clientPetAdapter } from '../adapters/clientPet.adapter';
import { Client } from '../models/client.model';
import { createClient, updateclient } from '../services/public.service';
import { randomId } from '../utilities/randomId';
import { swartAlert } from '../utilities/swartAlert.utility';

function useForm(clientEdit: Client) {
  const navigate = useNavigate();

  const [newClient, setNewClient] = useState<Client>({
    id: randomId('-1'),
    nombre: '',
    empresa: '',
    email: '',
    notas: ''
  })

  useEffect(() => {
    if (clientEdit !== undefined && clientEdit !== null) setNewClient(clientEdit);
  }, [clientEdit])


  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setNewClient({
      ...newClient, [name]: value
    })
  }
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (Object.values(newClient).includes('')) {
      swartAlert('Datos incompletos', 'error')
      return
    }


    if (clientEdit === null || clientEdit === undefined) {

      createClient(clientPetAdapter(newClient))
        .then(resp => {

          if (resp.status === 201) {
            swartAlert('Agregado correctamente', 'success');
            setNewClient({
              id: randomId('-1'),
              nombre: '',
              empresa: '',
              email: '',
              notas: '',
            });

          } else {
            throw Error('error')
          }
        })
        .catch((res) => {
          swartAlert('no se ha podido agregar', 'error');
        });
    } else {
      updateclient(clientPetAdapter(newClient))
        .then(resp => {
          if (resp.status === 200) {
            swartAlert('Editado correctamente', 'success');
            navigate('/');
          } else {
            throw Error('Error')
          }

        })
        .catch((resp) => {
          swartAlert('no se ha podido editar', 'error');

        })
    }
  }
  return {
    handleChange,
    handleSubmit,
    newClient
  }
}

export default useForm