import React from 'react';
import Logo from '../assets/logo3.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <img src={Logo} alt=''style={{ maxWidth: '300px'}}/>
        <div className='flex items-right gap-x-5'>
          <Link to='/blog'><button className='btn btn-sm'>BLOG</button></Link>
          {/* <button className='btn btn-sm'>NEWS</button> */}
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
