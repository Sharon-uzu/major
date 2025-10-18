import React from 'react'
import img from '../Assets/Rectangle 311.png'
import logo from '../Assets/hero.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

function Login() {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    // Later, you can add authentication logic here
    navigate('/overview');
  };

  return (
    <div className='auth'>
      <img className='m-img' src={img} alt='images'/>

      <div className='auth-right'>
        <div className='authc'>
          <div>
            <div className='auth-top'>
              <img src={logo} alt='images'/>
              <div>
                <p>Don't have an account?</p>
                <Link to='/signup'><button>Create an account</button></Link>
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
                <AiOutlineUser className='pix-i'/>
              </div>
            </div>

            <h3>Login to your account</h3>
            <h5>Enter your details to login</h5>

            <div className='socials'>
              <div><FaApple className='sos-i'/></div>
              <div><FcGoogle className='sos-i'/></div>
              <div><FaLinkedinIn className='sos-i'/></div>
            </div>

            <div className='auth-form'>
              <p>Email Address</p>
              <input type='email' placeholder='hello@gmail.com' className='f-input'/>
              <p>Password</p>
              <input type='password' placeholder='****' className='f-input'/>

              <div className='logged'>
                <div>
                  <input type='checkbox'/>
                  <span>Keep me logged in</span>
                </div>
                <Link to='/forgotpassword'>Forgot Password</Link>
              </div>

              <button onClick={handleLogin}>Login</button>
            </div>
          </div>

          <h6>© 2025 Major Cas Woods & Interiors</h6>
        </div>
      </div>
    </div>
  );
}

export default Login;
