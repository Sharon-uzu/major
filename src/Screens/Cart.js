import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Connect from '../Components/Connect';
import { MdDeleteForever } from "react-icons/md";
import img from '../Assets/modern-hotel-room-with-illuminated-pictures 1.png'
import { Link } from 'react-router-dom';


function Cart() {
  return (
    <div>
        <Header/>

        <div className='checkout'>
            <h1>Cart</h1>
            <div className='check-flex cart-flex'>
              
                <div className='check-right'>
                    <div className='check-rc'>
                        <h2>My Cart</h2>
                        <div className='cr-flex'>
                            <img src={img} alt='images'/>
                            <div className='cr-flex1'>
                                <div>
                                    <h3>Living Room</h3>
                                    <p>Qty:1</p>
                                </div>
                                <div>
                                    <h3>400,000</h3>
                                    < MdDeleteForever className='cr-i'/>
                                </div>
                            </div>
                        </div>

                        <div className='cr-flex'>
                            <img src={img} alt='images'/>
                            <div className='cr-flex1'>
                                <div>
                                    <h3>Living Room</h3>
                                    <p>Qty:1</p>
                                </div>
                                <div>
                                    <h3>400,000</h3>
                                    < MdDeleteForever className='cr-i'/>
                                </div>
                            </div>
                        </div>

                        <div className='coupon'>
                            <input type='text' placeholder='Coupon code or discount'/>
                            <button>Apply</button>

                        </div>
                        <div className='subtotal'>
                            <div>
                                <h3>Subtotal</h3>
                                <p>400,000</p>
                            </div>

                            <div>
                                <h3>Shipping</h3>
                                <p>4,000</p>
                            </div>
                        </div>

                        <div className='total'>
                            <div className='tot'>
                                <div>
                                    <h3>Total</h3>
                                    <p>Including ₦700 in taxes</p>
                                </div>
                                <h2>$404,000</h2>
                            </div>

                            
                        </div>

                        <Link to='/checkout' className='proceed'><button>Proceed to checkout</button></Link>
                        <span>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</span>
                    </div>
                </div>
            </div>

        </div>
        
        <Connect/>
        <Footer/>

    </div>
  );
}

export default Cart;
