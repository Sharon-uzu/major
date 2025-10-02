import React from 'react'
import Header from '../Components/Header';

import Connect from '../Components/Connect';
import Footer from '../Components/Footer';
import Faq from '../Components/Faq';
import Aboutus from '../Components/Aboutus';

function About() {
  return (
    <div>
        <Header/>
        <br/>
        <Aboutus/>
        <Faq/>
        <Connect/>
        <Footer/>

    </div>
  );
}

export default About;
