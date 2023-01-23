import { useLocation } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import { Client } from '../../../models/client.model';
import './FormClient.css';

function FormClient() {
  const location = useLocation();
  const clientEdit: Client = location.state;

  const { handleChange, handleSubmit, newClient } = useForm(clientEdit);
  const { nombre, empresa, email, notas } = newClient


  return (
    <div className='aggClient'>
      <h3 className='aggTitle'>Nuevo Cliente</h3>
      <span>Agrega un cliente</span>

      <form className='aggForm' autoComplete='off' onSubmit={handleSubmit} >
        <div className='aggCampo'>
          <label htmlFor='name'>Nombre:</label>
          <input
            onChange={handleChange}
            value={nombre}
            type='text'
            name='nombre'
            id='name'
          />
        </div>
        <div className='aggCampo'>
          <label htmlFor='empresa'>Empresa:</label>
          <input
            onChange={handleChange}
            value={empresa}
            type='text'
            name='empresa'
            id='empresa'
          />
        </div>
        <div className='aggCampo'>
          <label htmlFor='email'>Email:</label>
          <input
            onChange={handleChange}
            value={email}
            type='email'
            name='email'
            id='email'
          />
        </div>

        <div className='aggCampo'>
          <label htmlFor='notas'>Notas:</label>
          <textarea
            onChange={handleChange}
            value={notas}
            id='notas'
            name='notas'
          />
        </div>

        <div className='containerButton'>
          <button className='aggButton'>
            {
              clientEdit !== undefined && clientEdit === null
              ? 'Agregar cliente'
              : 'Editar cliente'
            }
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormClient