import React, { Component } from "react";
import './NewArrivals.css';
// import imgs from '../../images/arrival-bg.png';
//import background from '../../images/arrival-bg.png';

// class Na extends Component{
//     render(){
//         const myImg = {
//             backgroundImage: `url(${background})`
//         };
//     }
// }
const NewArrival = () => {
    return(
        // <div className="NewArrival" style={{backgroundImage:"url(./src/Image/arrival-bg.png)"}}>
        <>
            <div className="NewArrivals" >
                    <div style={{ backgroundImage: "url(/images/arrival-bg.jpg)",backgroundPosition:'auto',backgroundSize:'1350px 550px ',backgroundRepeat:'no-repeat'}}>
                        <p className="p1">#New Arrivals</p>
                        <p className="p2"> 
                            Vitae fugiat laboriosam officia perferendis provident aliquid
                            voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
                            Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                            
                        </p>
                        <button className="Showbtn">Shop Now</button>
                    </div>
                    
                
            </div>  
        </>
    );
}

export default NewArrival;