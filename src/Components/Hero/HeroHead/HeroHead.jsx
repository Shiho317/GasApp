import React from 'react';
import { Link } from 'react-router-dom';
import './HeroHead.style.css';

const HeroHead = () => {

  return (
    <React.Fragment>
    <div className='hero-wrapper'>
      <div className='hero-img'>
        <img src='https://cdn.dribbble.com/users/2121180/screenshots/6406131/__.gif' alt='hero-img'/>
      </div>
      <div className='hero-title'>
        <h1>Let's get fuel with BEST PRICE.</h1>
        <Link to='/search'>
          <button>GET STARTED</button>
        </Link>
      </div>
    </div>
    </React.Fragment>
  )
}

export default HeroHead