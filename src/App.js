import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Categories from './Screens/Categories';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Blog from './Screens/Blog';
import Blog2 from './Screens/Blog2';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import Category from './Screens/Category';
import Order from './Screens/Order';
import CheckOut from './Screens/CheckOut';
import Cart from './Screens/Cart';
import Overview from './Dashboard/DashScreens/Overview';
import Products from './Dashboard/DashScreens/Products';
import Orders from './Dashboard/DashScreens/Orders';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category" element={<Category />} />
      <Route path="/order" element={<Order />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      <Route path="/overview" element={<Overview />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />



    </Routes>
  );
}

export default App;
