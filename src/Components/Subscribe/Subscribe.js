import React from "react";
import './Subscribe.css';
const Subscribe = () => {
    return(
        <div className="Subscribe">
            <p className="p1">Subscribe To Get Discount Offers</p>
            <p className="p2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p><br/>
            <input type="email" name="email" placeholder="Enter Your Email" /><br/><br/><br/>
            <button type="button" className="button">SUBSCRIBE</button>     
        </div>
    );

}

export default Subscribe;
