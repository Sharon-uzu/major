import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Connect from '../Components/Connect';

function CheckOut() {
  return (
    <div>
        <Header/>

        <div className='checkout'>
            <h1>Living Room / Checkout</h1>
            <div className='check-flex'>
                <div className='check-left'>
                    <div className='check-left'>
                        <div className='check-lc'>
                            <h2>Payment</h2>
                            <h3>Pay with:</h3>
                            <div className='pay-flex'>
                                <div>
                                    <input type='radio'/>
                                    <span>Card</span>
                                </div>

                                <div>
                                    <input type='radio'/>
                                    <span>Bank</span>
                                </div>

                                <div>
                                    <input type='radio'/>
                                    <span>Transfer</span>
                                </div>

                            </div>

                            <h3>Card Number</h3>
                            <input type='text'/>

                            <div className='exp'>
                                <div>
                                    <h3>Expiry date</h3>
                                    <input type='text'/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='check-right'>

                </div>
            </div>

        </div>
        
        <Connect/>
        <Footer/>

    </div>
  );
}

export default CheckOut;
