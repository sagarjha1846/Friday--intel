import React from 'react';
import Mobileerror from '../images/svg/Mobilerror.svg';
import '../css/mobile404.css';

const Mobile404 = () => {
  return (
    <div className="main-mobile-404">
      <div><img className='logo-icon-mobile' src={Mobileerror} alt="logo" /></div>
      
      <p className="paragraph">This window is not compatible with</p>
      <p className="device">mobile devices</p>
<button className='mobile-404-btn'>
<a
              href="https://fridayintel.com"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Back to friday Intel
            </a>
</button>
      <footer className='mobile-footer'>© 2022-23 Friday Intel LLP</footer>
    </div>
  );
};

export default Mobile404;
