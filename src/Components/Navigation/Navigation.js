import React  from "react";
import  './logo.png';
import './Navigation.css';
import logoImg from '../../images/logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactDom from "react-dom";
import Cart from "../Cart/Cart";
import BlogPage from "../Blog/BlogPage";
import ContactPage from "../ContactPage/ContactPage";
import ProductPage from "../ProductPage/ProductPage";
import AboutPage from "../AboutPage/AboutPage";
import TestimomialPage from "../TestimonialPage/TestimonialPage";

const Navbar = () =>{
    return(
        <>
            
            <Router>
            <div className="Navigation">
                <div>
                    <ul>
                        <li><img src={logoImg} alt="logo" className="logoimgs"/></li>    
                        <li><Link to="/"><b>HOME</b></Link></li>
                        <li><b>PAGES<select className="drp">
                                <option> </option>
                                <option><Link to="/AboutPage">About</Link></option>
                                <Link to="/TestimonialPage"><option>Testimonial</option></Link>
                                </select></b></li>
                        <li><Link to="/ProductPage"><b>PRODUCTS</b></Link></li>
                        <li><Link to="/Blog"><b>BLOG</b></Link></li>
                        <li><Link to="/ContactPage"><b>CONTACT</b></Link></li>
                        <li><Link to="/Cart"><b>ADD TO CART</b></Link></li>
                        <li><b>SEARCH</b></li>
                    </ul>
                </div>
                <Routes>
                    <Route exact path="/Cart" element={< Cart />}></Route>
                    <Route exact path="/ProductPage" element={< ProductPage />}></Route>
                    <Route exact path="/ContactPage" element={< ContactPage />}></Route>
                    <Route exact path="/Blog" element={< BlogPage />}></Route>
                    <Route exact path="/AboutPage" element={< AboutPage />}></Route>
                </Routes>
            </div>
            </Router>
         </>
    );
}


export default Navbar;