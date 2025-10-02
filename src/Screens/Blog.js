import React from 'react'
import Header from '../Components/Header';
import Connect from '../Components/Connect';
import Footer from '../Components/Footer';
import BlogPost from '../Components/BlogPost';

function Blog() {
  return (
    <div>
        <Header/>
        <br/>
        <BlogPost/>
        
        <Connect/>
        <Footer/>

    </div>
  );
}

export default Blog;
