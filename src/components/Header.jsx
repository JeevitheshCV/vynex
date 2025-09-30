import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Products', to: '/products' },
  { name: 'Contact', to: '/contact' }
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <Link to="/">
            <img src="/assets/images/logo.jpg" alt="VYNEX Logo" />
          </Link>
        </div>
        <nav className="nav-menu">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={location.pathname === item.to ? 'active' : ''}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
