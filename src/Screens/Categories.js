import React from 'react'
import Header from '../Components/Header';
import Category from '../Components/Category';
import Partners from '../Components/Partners';
import Connect from '../Components/Connect';
import Footer from '../Components/Footer';

function Categories() {
  return (
    <div>
        <Header/>
        <br/>

        <Category/>
        <Partners/>
        <Connect/>
        <Footer/>

    </div>
  );
}

export default Categories;
