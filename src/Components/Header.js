import React, { useState } from 'react';
import logo from '../Assets/hero.png';
import { Link, NavLink } from 'react-router-dom'; // Changed from Link to NavLink
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" />

        {/* Hamburger for mobile */}
        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <IoMdClose size={24} /> : <HiMenuAlt1 size={24} />}
        </div>

        <ul className={isMobileMenuOpen ? 'open' : ''}>
          <div className='list1'>
            <li>
              <NavLink 
                to='/' 
                end
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/categories' 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/about' 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/contact' 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/blog' 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Blog
              </NavLink>
            </li>
          </div>

          <div className='list2'>
            <span><CiSearch className='l-i' /></span>
            <span><CiHeart className='l-i' /></span>
            <span><Link to='/cart'><RiShoppingCart2Line className='l-i' /></Link></span>
            <Link to='/login' className='acct'>
              <CiUser className='l-i' />
              <p>Account</p>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
