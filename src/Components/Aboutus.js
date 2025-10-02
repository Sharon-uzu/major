import React from 'react'
import img1 from '../Assets/Group 27.png'
import img2 from '../Assets/Group 28.png'
import img3 from '../Assets/Rectangle 307.png'
function Aboutus() {
  return (
    <div className='aboutus'>

        <div className='abt-flex'>
            <img src={img1} alt='image1'/>
            <div className='abt-text'>
                <h3>OUR HISTORY</h3>
                <p>Founded in January 2024, Major Cas Woods and Interiors is a distinguished furniture and interior
                    design firm based in Lagos, Nigeria. We specialize in crafting bespoke furniture pieces and curating
                    refined interiors that embody elegance, functionality, and timeless appeal. Our creations are born
                    from meticulous craftsmanship, premium materials, and a deep understanding of spatial harmony.
                    Whether transforming a sophisticated home, elevating a corporate environment, or defining a
                    luxurious hospitality space, we deliver interiors that not only inspire but also enrich everyday living.
                </p>
            </div>
        </div>



        <div className='abt-flex abt-flex2'>
            <div className='abt-text'>
                <h3>OUR MISSION AND VISION</h3>
                <p> Mission</p>
                <p>To transform ordinary spaces into extraordinary experiences through masterful craftsmanship, innovative design, and uncompromising quality.</p>
                <br></br>
                <p>Vision</p>
                <p>To be recognized as West Africa’s foremost name in luxury furniture and interior design — a symbol of sophistication, innovation, and enduring style.</p>
            </div>
            <img src={img2} alt='image2'/>

        </div>

        <div className='core'>
            <h3>CORE VALUES</h3>
            <img src={img3} alt='core values'/>

            <div className='abt-cards'>
                <div className='wrap'>
                    <div className='abt-card1'>
                        <div className='dk'>
                            <div>
                                <h4>Exquisite Craftsmanship</h4>
                                <p>Precision, artistry, and a relentless pursuit of perfection.</p>
                            </div>
                        </div>
                    
                    </div>
                </div>


                <div className='wrap'>
                    <div className='abt-card1'>
                        <div className='dk'>
                            <div>
                                <h4>innovation</h4>
                                <p>Merging contemporary design with timeless elegance.</p>
                            </div>
                        </div>
                    
                    </div>

                </div>

                <div className='wrap'>
                    <div className='abt-card1'>
                        <div className='dk'>
                            <div>
                                <h4>Integrity</h4>
                                <p>Building trust through transparency, authenticity, and excellence.</p>
                            </div>
                        </div>
                    
                    </div>

                </div>

                <div className='wrap'>
                    <div className='abt-card1'>
                        <div className='dk'>
                            <div>
                                <h4>Enduring Quality</h4>
                                <p>Creating pieces that transcend trends and stand the test of time.</p>
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className='wrap'>
                    <div className='abt-card1'>
                        <div className='dk'>
                            <div>
                                <h4>Client-Centric Approach</h4>
                                <p>Curating spaces that reflect our clients’ unique style and aspirations.</p>
                            </div>
                        </div>
                    
                    </div>
                </div>

            </div>
        </div>

    </div>
  );
}

export default Aboutus;
