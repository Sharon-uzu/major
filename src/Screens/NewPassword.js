import React from 'react'
import img from '../Assets/Rectangle 308.png'
import logo from '../Assets/hero.png'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { GiPadlock } from "react-icons/gi";
import { IoInformationCircle } from "react-icons/io5";


function NewPassword() {
  return (
    <div className='auth'>
               
               <img className='m-img' src={img} alt='images'/>
        
               <div className='auth-right'>
                    <div className='authc'>
                        <div>
                            <div className='auth-top'>
                                <img src={logo} alt='images'/>
                                <div>
                                    <p>Already have an account?</p>
                                    <Link to='/login'><button>Login</button></Link>
                                </div>
        
                            </div>
        
                            <Link to='/' className='back'>
                                <IoIosArrowBack className='b-i'/>
                                <span>Back to page</span>
                            </Link>
                        </div>
        
                        <div className='auth-profile'>
                            <div className='pix'>
                                <div>
                                    <GiPadlock  className='pix-i'/>
                                </div>
        
                            </div>
                            <h3>Create New Password</h3>
                            <h5>Enter a new password.</h5>
        
                            <div className='auth-form'>
                                
                                <p>New Password</p>
                                <input type='password' placeholder='****' className='f-input'/>
                                
                                <div className='logged'>
                                    <div>
                                        <IoInformationCircle/>
                                        <span>Must contain 1 uppercase letter, 1 number, min. 8 characters.</span>
                                    </div>
        
        
                                </div>
                                <button>Create New Password</button>
                            </div>
        
                        </div>
        
                        <h6>© 2025 Major Cas Woods & Interiors</h6>
        
                    </div>
        
               </div>
        
        </div>
  );
}

export default NewPassword;
