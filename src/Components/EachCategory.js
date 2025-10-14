import React, { useState } from 'react';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import img1 from '../Assets/Rectangle 32.png';
import img2 from '../Assets/Rectangle 22.png';
import img3 from '../Assets/Rectangle 26.png';
import { Link } from 'react-router-dom';

const featuredItems = [
  { id: 1, image: img1, title: 'Living room', price: '₦700,000', rating: 5 },
  { id: 2, image: img2, title: 'Bedroom Set', price: '₦850,000', rating: 4 },
  { id: 3, image: img3, title: 'Office Space', price: '₦600,000', rating: 5 },
  { id: 4, image: img1, title: 'Classic Dining', price: '₦720,000', rating: 3 },
  { id: 5, image: img2, title: 'Studio Vibe', price: '₦950,000', rating: 4 },
  { id: 6, image: img2, title: 'Bedroom Set', price: '₦850,000', rating: 4 },

];


function EachCategory() {


  return (
    <div className='feature'>
      <div className='feature-top'>
        <h1><span style={{color:'#8F8F8F'}}>Explore Our Categories / </span>Residential Elegance</h1>
       
      </div>

      <div className='feature-list eachcategory'>
        {featuredItems.map(({ id, image, title, price, rating }) => (
          <div className='feature1' key={id}>
            <img src={image} alt={title} />

            <div className='f1'>
              <h3>{title}</h3>
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p>+10</p>
              </div>
            </div>

            <div className='f1'>
              <div>
                <h6>Rating</h6>
                {[...Array(rating)].map((_, i) => (
                  <IoIosStar className='ff-i' key={i} />
                ))}
              </div>
              <FaRegHeart className='rate-i' />
            </div>

            <div className='f1'>
              <h2>{price}</h2>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EachCategory;
