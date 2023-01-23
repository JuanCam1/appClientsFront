import { Link } from 'react-router-dom';
import useList from '../../../hooks/useList';
import './ListClient.css';

const ListClient = () => {

  const { clients,handleEdit,handleDelete,loading} = useList();

  
  return (
    <div className='listClients'>
      <h3 className='listTitle'>Clientes</h3>
      <span>Administra tus clientes</span>

      {
        loading
          ? (<div> Loading </div>)
          : (
            <div>
              <div className='listTable'>
                <table>
                  <thead>
                    <tr>
                      <th scope='col'>Nombre</th>
                      <th scope='col'>Contacto</th>
                      <th scope='col'>Empresa</th>
                      <th scope='col'>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((cli) => {
                      return (
                        <tr key={cli.id}>
                          <td data-label='Nombre' className='textCap'>{cli.nombre}</td>
                          <td data-label='Contacto'>{cli.email}</td>
                          <td data-label='Empresa' className='textCap'>{cli.empresa}</td>
                          <td data-label='Acciones'>
                            <div className='buttons'>
                              <Link to='/viewCLient' state={cli}>
                                <button className='ver'>Ver</button>
                              </Link>
                              <button
                                className='edit'
                                onClick={()=> {
                                  handleEdit(cli)
                                }}
                              >
                                Editar
                              </button>
                              <button
                                className='del'
                                onClick={()=> {
                                  handleDelete(cli.id)
                                }}
                              >
                                Eliminar
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className='toastAlert '>
                <span>Desea eliminar el cliente ?</span>
                <button>Eliminar</button>
              </div>
            </div>
          )
      }

    </div>
  )
}




export default ListClient
