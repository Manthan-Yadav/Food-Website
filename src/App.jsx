import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900, 
      once: true     
    });
  }, []);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
       
        <Navbar setShowLogin={setShowLogin} data-aos="fade-down" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      
      <Footer data-aos="fade-up" />
    </>
  );
};

export default App;

