import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Categories from './Screens/Categories';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Blog from './Screens/Blog';
import Blog2 from './Screens/Blog2';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog2" element={<Blog2 />} />


    </Routes>
  );
}

export default App;
