import React from 'react';
import { MdArrowOutward } from "react-icons/md";



function Connect() {
  
  return (
    <div className='connect-section'>
        <div className='connect'>
            <h1>Stay Connected, Stay Informed</h1>
            <p>Subscribe to receive exclusive updates, tips, and promotions straight to your inbox. Join our community for expert advice and resources to support your care journey. </p>
            <div className='connect-form'>
                <input type='email' placeholder='Enter your email' />
                <button><MdArrowOutward className='f-i'/></button>
            </div>

        </div>

    </div>
  );
}

export default Connect;
