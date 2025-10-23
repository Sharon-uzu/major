import React from 'react';
import logo from '../Assets/FECALOGO.png'
import { FiSearch } from "react-icons/fi";


function Header() {
  return (
    <div className="header">
      <header>
        <div className='h-left'>
          <img src={logo} alt='images' className='logo'/>
          <div className='h-search'>
            <FiSearch className='hs-ii'/>
            <input type='search' placeholder='Search Facebook'/>
          </div>
          
        </div>

        <div className='h-middle'>
          <icon className='h-ii'/>
          <icon className='h-ii'/>
          <icon className='h-ii'/>
          <icon className='h-ii'/>
          <icon className='h-ii'/>
        </div>

         <div className='h-right'>
          <div>
            <icon className='hr-ii'/>
          </div>
          
          <div>
            <icon className='hr-ii'/>
          </div>

          <div>
            <icon className='hr-ii'/>
          </div>

          <div>
            <icon className='hr-ii'/>
          </div>

        </div>
        
      </header>
    </div>
  );
}

export default Header;
