import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Admin</h1>
      <div>
        <NavLink to="/products">Produtos</NavLink>
      </div>
      <div>
        <NavLink to="/categories">Categorias</NavLink>
      </div>
    </div>
  );
}
