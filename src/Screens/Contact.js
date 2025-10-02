import React from 'react'
import Header from '../Components/Header';
import Connect from '../Components/Connect';
import Footer from '../Components/Footer';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import img from '../Assets/unsplash_TyanDMPxwHc.png'


function Contact() {
  return (
    <div>
        <Header/>
        <br/>
        <div className='contact'>
            <h2>Get in Touch With Major Cas Wood & Interiors</h2>

            <div className='contact-div address'>
                <CiLocationOn className='cc-icon'/>
                <p>No 10 Okun-Ajah Community Rd, Ogombo Rd, off Ebo Junction, behind Citadel View Estate, Ajah, Lekki, Lagos.</p>
            </div> 

            <div className='contact-div'>
                <MdOutlineEmail className='cc-icon'/>
                <p>Majorcaswoodsandingeriors@gmail.com</p>
            </div>

             <div className='contact-div'>
                <BiPhoneCall className='cc-icon'/>
                <p>07061209690, 07071536235</p>
            </div>

            <div className='contact-form'>
                <img src={img} alt='contact iamge'/>
                <form className='form'>
                    <div className='form-c'>
                        <div>
                            <p>Full Name</p>
                            <input type='text' placeholder='Your name'/>
                        </div>

                        <div>
                            <p>Email Address</p>
                            <input type='email' placeholder='Email'/>
                        </div>

                        <div>
                            <p>Phone Number</p>
                            <input type='tel' placeholder='Phone number'/>
                        </div>

                        <div>
                            <p>Your Message</p>
                            <textarea placeholder=''></textarea>
                        </div>

                        <button>Send Message</button>
                    </div>

                </form>
            </div>

        </div>
        <Connect/>
        <Footer/>

    </div>
  );
}

export default Contact;
