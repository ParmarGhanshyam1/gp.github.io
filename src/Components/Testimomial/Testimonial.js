import React from "react";
import './Testimonial.css';
import custImg from '../../images/client.jpg';

const Testimonial = () => {
    return(
        <>
            <div className="Testimonial"> 
                <p>Customer's Testimonial</p>
                <hr className="line"/>
            </div>
            <div className="details">
                <img src= {custImg} alt="client" className="custImg"/>
                <p className="name">Anna Trevor</p>
                <p>Customer</p>
                <p className="desc">Dignissimos reprehenderit repellendus nobis error quibusdam? 
                    Atque animi sint unde quis reprehenderit, et, perspiciatis, 
                    debitis totam est deserunt eius officiis ipsum ducimus ad labore 
                    modi voluptatibus accusantium sapiente nam! Quaerat.</p>
            </div>
        </>
    );
}

export default Testimonial;