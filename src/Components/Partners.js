import React from 'react';
import img1 from '../Assets/image 50.png'
import img2 from '../Assets/image 51.png'
import img3 from '../Assets/image 52.png'
import img4 from '../Assets/image 53.png'
import img5 from '../Assets/image 55.png'


function Partners() {
  
  return (
    <div className='partners-section'>
        <h1>Our Partners</h1>
        <div className='partners'>
            <img src={img1} alt='partner1'/>
            <img src={img2} alt='partner2'/>
            <img src={img3} alt='partner3'/>
            <img src={img4} alt='partner4'/>
            <img src={img5} alt='partner5'/>
        </div>

    </div>
  );
}

export default Partners;
