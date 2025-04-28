import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav nav-custom p-3 d-flex justify-content-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mx-3 text-decoration-none nav-link-custom ${isActive ? 'nav-active' : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/team"
        className={({ isActive }) =>
          `mx-3 text-decoration-none nav-link-custom ${isActive ? 'nav-active' : ''}`
        }
      >
        Team
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `mx-3 text-decoration-none nav-link-custom ${isActive ? 'nav-active' : ''}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
