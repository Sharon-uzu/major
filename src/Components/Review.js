import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import img1 from '../Assets/Ellipse 2039.png';

const reviews = [
  {
    name: "Aspen Siphron",
    date: "May 12, 2024",
    rating: 4.9,
    content: "I've been using Nature's Best Vitamin C 1000 mg tablets for six months, and the results are fantastic. My immune system feels stronger—I haven't had a single cold this flu season. I've also noticed a boost in my energy levels throughout the day."
  },
  {
    name: "Jordan Smith",
    date: "June 1, 2024",
    rating: 5.0,
    content: "Absolutely love this product! I feel more energized and focused. It’s now a part of my daily routine."
  },
  {
    name: "Mila Johnson",
    date: "June 15, 2024",
    rating: 4.7,
    content: "Good value for money. Noticeable difference in my overall health. Will buy again."
  },
  {
    name: "Leo Chan",
    date: "July 2, 2024",
    rating: 4.8,
    content: "Great product! Helps with my daily vitamin intake and supports my immune system well."
  },
  {
    name: "Alex Kim",
    date: "July 10, 2024",
    rating: 4.6,
    content: "Solid supplement. No aftertaste and easy to swallow. Feels like my energy has improved."
  },
  {
    name: "Sara Liu",
    date: "August 3, 2024",
    rating: 4.9,
    content: "One of the best Vitamin C tablets I've used. Definitely recommend!"
  }
];

function Review() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex + 3 > reviews.length ? 0 : nextIndex;
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, []);


  const [itemsToShow, setItemsToShow] = useState(3);

useEffect(() => {
  const updateItems = () => {
    const width = window.innerWidth;
    if (width <= 480) setItemsToShow(1);
    else if (width <= 768) setItemsToShow(2);
    else setItemsToShow(3);
  };

  updateItems();
  window.addEventListener('resize', updateItems);
  return () => window.removeEventListener('resize', updateItems);
}, []);

const visibleReviews = reviews.slice(startIndex, startIndex + itemsToShow);


  return (
    <div className='review'>
      <h1>Customer Reviews</h1>
      <div className='tests'>
        {visibleReviews.map((review, index) => (
          <div className='test1' key={index}>
            <div className='test1-c'>
              <div className='t-top'>
                <div className='t-prof'>
                  <img src={img1} alt="profile" />
                  <div>
                    <h6>{review.name}</h6>
                    <p>{review.date}</p>
                  </div>
                </div>
                <div className='t-rate'>
                  <FaStar className='tr-i' />
                  <span>{review.rating}</span>
                </div>
              </div>
              <h5>{review.content}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
