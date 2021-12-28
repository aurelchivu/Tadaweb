import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link to='/nerfguns' className='navbar-brand px-1'>
          MyCoolApp
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item px-2'>
              <Link to='/about'>About us</Link>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
            <li className='nav-item px-2'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
