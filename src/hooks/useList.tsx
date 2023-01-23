import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clientAdapter } from '../adapters/client.adapter';
import { Client } from '../models/client.model';
import { deleteclient, getClientsAll } from '../services/public.service';
import { loadAbort } from '../utilities/load-abort-axios.utility';
import { swartAlert } from '../utilities/swartAlert.utility';

function useList() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteClient, setDeleteClient] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const controller = loadAbort();
    setLoading(true);
    setDeleteClient(false);

    try {
      (async () => {
        const data = await getClientsAll();
        const dataAdap = clientAdapter(data);
        setClients(dataAdap);
        setLoading(false);
      })();

    } catch (error) {
      setLoading(true);
    }
    return () => {
      controller.abort;
    }
  }, [deleteClient]);

  const handleEdit = (cli: Client) => {
    navigate(`/editClient/${cli.id}`, {
      state: cli,
    });
   }
  const handleDelete = (id: string) => {
    deleteclient(id)
    .then(resp => {
      if(resp.status === 204){
        setDeleteClient(true);
        swartAlert('Eliminado correctamente', 'success');
      }else {
        throw Error('error')
      }
    })
    .catch(err => {
      swartAlert('No se ha podido eliminar', 'error');
    })
   }

  return {
    handleEdit,
    handleDelete,
    clients,
    loading
  }
}

export default useList