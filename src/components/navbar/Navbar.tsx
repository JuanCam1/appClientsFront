
import { NavLink as NavLinkRouter } from 'react-router-dom';
import './Navbar.css';

type Props = {
  to: string
  children: string
}

const NavLinkCust = ({ to, children, ...props } : Props) => {
  return (
    <NavLinkRouter
      {...props}
      className={({ isActive }) => {
        return isActive ? 'is-active' : undefined;
      }}
      to={to}
    >
      {children}
    </NavLinkRouter>
  );
};

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='navTitle'>CRM - Clientes</div>
      <div className='navOption'>
        <ol>
          <ul>
            <NavLinkCust to='/'> Clientes </NavLinkCust>
          </ul>
          <ul>
            <NavLinkCust to='newClient'> Nuevo Cliente </NavLinkCust>
          </ul>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;