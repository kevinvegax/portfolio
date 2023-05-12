import React from 'react';

import Logo from '../assets/logo3.png'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt=''style={{ maxWidth: '300px'}}/>
        </a>
        <div className='flex items-right gap-x-5'>
          <button className='btn btn-sm'>BLOG</button>
          {/* <button className='btn btn-sm'>NEWS</button> */}
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
