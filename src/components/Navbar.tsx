import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"><Link to="/Home">Kids Shop</Link></div>
        <ul className="nav-links">
          <CustomLink href="/Home">Home</CustomLink>
          <CustomLink href="/Shop">Shop</CustomLink>
          <CustomLink href="/About_us">About us</CustomLink>
          <CustomLink href="/Contact">Contact</CustomLink>
          <div className='navbar-icon'> 
            <div className='shop'><span className="material-symbols-outlined">shopping_cart</span></div>
            <div className='account'><Link to="/Registr"><span className="material-symbols-outlined">account_circle</span></Link></div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <li>
      <Link to={href} className={isActive ? 'active' : ''}>{children}</Link>
    </li>
  );
};

export default CustomLink;