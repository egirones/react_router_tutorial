import { Link, Navlink, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';
import { useParams } from 'react-router-dom';

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'red' : 'blue')}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
