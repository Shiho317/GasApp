import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.style.css';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-contents-wrapper'>
        <div className='contents'>
          <h1>GasApp</h1>
        </div>
        <div className='contents'>
          <h3>Pages</h3>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/search'>
                Search
              </Link>
            </li>
            <li>
              <a href='/#guide'>
                Guide
              </a>
            </li>
          </ul>
        </div>
        <div className='contents'>
          <h3>Source</h3>
          <ul>
            <li>
              <a href='https://dribbble.com/' target="_blank" rel="noopener noreferrer">
                Fuel API
              </a>
            </li>
            <li>
              <a href='https://dribbble.com/' target="_blank" rel="noopener noreferrer">
                Dribble
              </a>
            </li>
            <li>
              <a href='https://dribbble.com/' target="_blank" rel="noopener noreferrer">
                Google Map
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy;2022 ShihoN All rights reserved.</p>
    </div>
  )
}

export default Footer