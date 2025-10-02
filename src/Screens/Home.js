import React from 'react'
import Header from '../Components/Header';
import hero from '../Assets/Component 1.png'
import Service from '../Components/Service';
import Category from '../Components/Category';
import Feature from '../Components/Feature';
import Review from '../Components/Review';
import Partners from '../Components/Partners';
import Faq from '../Components/Faq';
import Connect from '../Components/Connect';
import Footer from '../Components/Footer';


function Home() {
  return (
    <div>

        <div className='hero'>
            <div className='hr'>
                 <Header/>

                 <div className='hero-c'>
                    <h1>Transform Your Home with Luxe & Classy Design</h1>
                    <div>
                        <p>At Major Cas Woods & Interiors, our pieces are thoughtfully designed and meticulously crafted to combine elegance, durability, and functionality. </p>
                        <button>Shop Now</button>
                    </div>
                    <img src={hero}/>
                 </div>
            </div>
           
        </div>

        <Service/>
        <Category/>
        <Feature/>
        <Review/>
        <Partners/>
        <Faq/>
        <Connect/>
        <Footer/>

    </div>
  );
}

export default Home;
