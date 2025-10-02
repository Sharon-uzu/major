import React from 'react'
import logo from '../Assets/hero.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content'>

          <div className='first-footer'>
            <div className='foot1'>
              <img src={logo} alt='logo'/>
              <p>We specialize in crafting bespoke furniture pieces and curating refined interiors that embody elegance, functionality, and timeless appeal.</p>
              <div className='footer-icons'>
                <FaXTwitter className='ft-i'/>
                <FaFacebook className='ft-i'/>
                <FaLinkedin className='ft-i'/>
                <RiInstagramFill className='ft-i'/>
              </div>
            </div>

            <div className='foot2'>
              <h3>Categories</h3>
              <p>Residential Elegance</p>
              <p>Corporate Prestige</p>
              <p>Hospitality Grandeur</p>
              <p>Signature Creations</p>
            </div>

            <div className='foot2'>
              <h3>Our Services</h3>
              <p>Bespoke Furniture</p>
              <p>Décor Curation</p>
              <p>Corporate & Hospitality </p>
              <p>Luxury Interior Design</p>
              <p>Exclusive 3D Visualization</p>
            </div>


            <div className='foot2'>
              <h3>Contact Us</h3>
              <p>Address: No 10 Okun-Ajah Community Rd, Ogombo Rd, off Ebo Junction, behind Citadel View Estate, Ajah, Lekki, Lagos.</p>
              <p>Email: Majorcaswoodsandingeriors@gmail.com</p>
              <p>Phone Numbers: 07061209690, 07071536235 </p>
       
            </div>


          </div>

          <div className='second-footer'>
            <p>© 2024,  Major Cas Woods and Interiors</p>

          </div>

        </div>

    </div>
  );
}

export default Footer;
