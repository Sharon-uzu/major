import React, { useState } from 'react';
import img1 from '../Assets/modern-hotel-room-with-illuminated-pictures 1.png';
import img2 from '../Assets/3d-room-interior-with-classic-design-furniture.png';
import img3 from '../Assets/Rectangle 25 (1).png';
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";

const items = [
  { id: 1, bgImage: img1, text: 'Resident elegance' },
  { id: 2, bgImage: img2, text: 'Modern luxury' },
  { id: 3, bgImage: img3, text: 'Contemporary comfort' },
  { id: 4, bgImage: img1, text: 'Signature creation' },
  { id: 5, bgImage: img2, text: 'Modern luxury' },
  { id: 6, bgImage: img3, text: 'Contemporary comfort' },
];

function Category() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories from items
  const categories = ['All', ...Array.from(new Set(items.map(item => item.text)))];

  // Filter items based on selected category
  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter(item => item.text === activeCategory);

  return (
    <div className='category'>
      <h1>Explore Our Category</h1>

      <div className='cat-flex'>
        <div className='cat-list'>
          {categories.map(category => (
            <span
              key={category}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'active' : ''}
              style={{ cursor: 'pointer' }}
            >
              {category}
            </span>
          ))}
        </div>

        <div className='cat-search'>
          <div className='cat-form'>
            <CiSearch className='f-i' />
            <input type='search' placeholder='search' />
          </div>
          <span><IoFilter className='f-i' /></span>
        </div>
      </div>

      <div className='category-list'>
        {filteredItems.map(({ id, bgImage, text }) => (
          
          <div className='list1' key={id}>
            <div className='list-c'>
              <img src={bgImage} alt={text} />
              <div><p>{text}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
