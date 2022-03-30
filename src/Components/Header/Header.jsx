import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/gasapp-logo.svg';
import './Header.style.css';


const Header = () => {
  return (
    <div className='header-wrapper'>
      <nav>
        <img src={Logo} alt="hero-img" />
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/#guide'>
              Guide
            </Link>
          </li>
          <li>
            <Link to='/search'>
              <button>Start Now</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header