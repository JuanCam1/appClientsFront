import { useLocation, useNavigate } from 'react-router-dom';
import { Client } from '../../../models/client.model';
import './ViewClient.css';

const ViewClient = () => {
  const location = useLocation();
  const client : Client = location.state;
  
  const navigate = useNavigate();

  return (
    <div className='viewClient'>
      <div>
        <h3>
          Nombre: <span>{client.nombre}</span>
        </h3>
        <h3>
          Contacto: <span>{client.email}</span>
        </h3>
        <h3>
          Empresa: <span>{client.empresa}</span>
        </h3>
        <h3 className='note'>
          Notas: <span>{client.notas}</span>
        </h3>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default ViewClient;
