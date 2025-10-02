import React from 'react'
import { AiOutlineControl } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa';
import { IoLayersOutline } from 'react-icons/io5';
import { MdCorporateFare, MdOutlineChair } from 'react-icons/md';

function Service() {
  return (
   <div className='service'>
    <h2>Our Services</h2>
    <p className='serv-p'>We provide a complete suite of high-end furniture and interior solutions, tailored for both residential and commercial spaces</p>

    <div className='service-list'>
        <div className='serv1'>
            <div className='serv-c'>
                <div className='icon'>
                    <MdOutlineChair className='s-i'/>

                </div>

                <h3>Bespoke Furniture Design & Handcrafted Manufacturing</h3>
                <p>We create bespoke furniture pieces, handcrafted with exceptional detail and quality, tailored to match your unique taste and lifestyle.</p>

            </div>

        </div>


        <div className='serv1'>
            <div className='serv-c'>
                <div className='icon'>
                    <IoLayersOutline className='s-i'/>
                </div>

                <h3>Luxury Interior Design & Spatial Planning</h3>
                <p>Thoughtful layouts and design concepts that maximize functionality and beauty.</p>

            </div>

        </div>


        <div className='serv1'>
            <div className='serv-c'>
                <div className='icon'>
                    <MdOutlineChair className='s-i'/>

                </div>

                <h3>Premium Interior Styling & Décor Curation</h3>
                <p>Carefully selected décor elements that bring sophistication to every space.</p>

            </div>

        </div>


        <div className='serv1'>
            <div className='serv-c'>
                <div className='icon'>
                    <MdCorporateFare className='s-i'/>     
                </div>

                <h3>Corporate & Hospitality Furnishing Solutions</h3>
                <p>Elegant, durable, and functional furniture for offices, hotels, and commercial spaces.</p>

            </div>

        </div>

        <div className='serv1'>
            <div className='serv-c'>
                <div className='icon'>
                    <AiOutlineControl className='s-i'/>
                </div>

                <h3>Exclusive 3D Visualization & Concept Development</h3>
                <p>Realistic previews of your projects before execution.</p>

            </div>

        </div>



        <div className='serv1'>
            <div className='serv-c'>
                <div className='icon'>
                    <FaLink className='s-i'/>
                </div>

                <h3>Turnkey Renovation & Fit-Out Services</h3>
                <p>End-to-end solutions that transform spaces with seamless execution.</p>

            </div>

        </div>

    </div>

   </div>
  );
}

export default Service;
