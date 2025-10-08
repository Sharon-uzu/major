import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Connect from '../Components/Connect';
import EachCategory from '../Components/EachCategory';

function Category() {
  return (
    <div>
        <Header/>
        <div className='sep-cat'>
            <h1>Residential Elegance</h1>
        </div>
        <EachCategory/>
        <Connect/>
        <Footer/>

    </div>
  );
}

export default Category;
