import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import FormClient from '../pages/Client/FormClient/FormClient';
import ListClient from '../pages/Client/ListClient/ListClient';
import ViewClient from '../pages/Client/ViewClient/ViewClient';

function IndexRoutes() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ListClient />} />
          <Route path='newClient' element={<FormClient />} />
          <Route path='editClient/:id' element={<FormClient />} />
          <Route path='viewClient' element={<ViewClient />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default IndexRoutes;
