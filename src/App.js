//import logo from './logo.svg';

//import { Component } from 'react/cjs/react.production.min';
import React from 'react';
import './App.css';
import Navbar from './Components/Navigation/Navigation';
import SlideImage from './Components/SliderImage/SlideImage';
import ShopWithUs from './Components/ShopWithUsGrid/ShopWithUsGrid';
import NewArrival from './Components/NewArrivals/NewArrivals';
// import Products from './Components/ProductGrid/ProductGrid';
import Subscribe from './Components/Subscribe/Subscribe';
import Testimonial from './Components/Testimomial/Testimonial';
import FooterNav from './Components/FooterNav/FooterNav';
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './Components/Products/Products';
import cartReducer from './Components/Reducers/cartReducer';

// import { Navigation } from './Navigation/Navigation.js';

const App = () => {
    return(
    <>

     
      <div>
      {/* <Route exact path="/Cart" element={<Cart/>}></Route> */}
         <Navbar /> 
      </div>
      <div>
        <SlideImage />
      </div>
      <div>
          <ShopWithUs />
      </div>
      <div>
        <NewArrival/>
      </div>
      <div>
        {/* <cartReducer /> */}
        <Products />
      </div>
      <div>
        <Subscribe />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <FooterNav />
      </div>   
        
    </>
    );
}

export default App;
