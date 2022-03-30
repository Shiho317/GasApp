import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import Logo from '../../assets/images/gasapp-logo.svg';
import './Header.style.css';


const Header = () => {

  const [ isHamburgerOpen, setIsHamburgerOpen ] = useState(false);

  const handleOpenEvent = () => {
    setIsHamburgerOpen(prev => !prev)
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  return (
    <div className='header-wrapper'>
      <nav>
        <img src={Logo} alt="header-logo" />
        
        {isDesktop ? ( 
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <a href='/#guide'>
              Guide
            </a>
          </li>
          <li>
            <Link to='/search'>
              <button>Start Now</button>
            </Link>
          </li>
        </ul>
        ) : (
          <>
          <div className='hamburger-menu' onClick={handleOpenEvent}>
            <GiHamburgerMenu/>
            <div className={isHamburgerOpen ? 'menu-bar' : 'menu-bar hidden'}>
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
            </div>
          </div>
          {isHamburgerOpen &&
          <div className= 'close-btn' onClick={handleOpenEvent}>
                <IoMdClose/>
          </div>
          }
          </>
        )}
      </nav>
    </div>
  )
}

export default Header