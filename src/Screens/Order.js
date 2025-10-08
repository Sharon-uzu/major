import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { IoIosStar } from "react-icons/io";
import Connect from '../Components/Connect';
import Faq from '../Components/Faq';
import img from '../Assets/modern-hotel-room-with-illuminated-pictures 1.png'
import Review from '../Components/Review';
import { Link } from 'react-router-dom';

function Order() {
  return (
    <div>
        <Header/>

        <div className='cat-order'>
            <h1>Categories / Residential Elegance / <span style={{color:'#8c8c8c'}}>Living Room</span></h1>

            <div className='cat-flexx'>

                <div className='cat-imgs'>
                    <img className='comp' src={img} alt='images'/>
                    <img src={img} alt='images'/>
                    <img src={img} alt='images'/>
                    <img src={img} alt='images'/>
                </div>

                <div className='cat-txts'>
                    <h2>Living Room - Sofa </h2>
                    <div className='stars'>
                        <IoIosStar className='ss-ii'/>
                        <IoIosStar className='ss-ii'/>
                        <IoIosStar className='ss-ii'/>
                        <IoIosStar className='ss-ii'/>
                        <IoIosStar className='ss-ii'/>
                        <span>288 reviews</span> <span>|</span> <span>100kg</span>
                    </div>

                    <p>Tagline | Handcrafted luxury, designed for timeless comfort.</p>
                    <p>Availability | Made-to-Order (2–3 weeks)</p>
                    <h4>₦400,000</h4>

                    <div className='prd-desc'>
                        <h6>Product Details <span>| Description:</span></h6>
                        <p>Elevate your living space with our bespoke wooden lounge chair, crafted with precision and passion. Featuring a solid oak frame and premium Italian leather, this piece blends elegance with durability, ensuring comfort that lasts a lifetime.</p>
                        <p>Dimensions</p>
                        <p>Height: 85 cm Width: 70 cm Depth: 65 cm</p>
                    </div>

                    <div className='prd-desc col-desc'>
                        <div className='col-l'>
                            <h3>Color</h3>
                            <p>Brown</p>
                        </div>

                        <div className='col-r'>
                            <div className='e-col'>
                                <div style={{background: '#7D5A5A'}}></div>
                            </div>
                            <div className='e-col'>
                                <div style={{background: '#E3BB6F'}}></div>
                            </div>
                            <div className='e-col'>
                                <div style={{background: '#DE7777'}}></div>
                            </div>
                            <div className='e-col'>
                                <div style={{background: '#A172DE'}}></div>
                            </div>
                            <div className='e-col'>
                                <div style={{background: '#6E84B3'}}></div>
                            </div>

                        </div>

                    </div>

                    <div className='prd-desc col-desc'>
                        <div className='col-l'>
                            <h3>Quanity</h3>
                            <p>O2</p>
                        </div>

                        <div className='calc'>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                    </div>

                    <div className='col-btns'>
                        <button className='btnn'>Add to cart</button>
                        <Link to='/checkout'  className='btnn c-btn'><button>CheckOut</button></Link>
                    </div>


                </div>
            
            
            </div>

        </div>
        
        <Review/>
        <Faq/>
        <Connect/>
        <Footer/>

    </div>
  );
}

export default Order;
