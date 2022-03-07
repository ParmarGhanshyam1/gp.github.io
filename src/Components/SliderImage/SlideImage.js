import React, { Component } from "react";
// import SlideImage from "./Image/SlideImage";
import './SliderImage.css';
// import SlideImg from '../../images/slider-bg.jpg';
// import './SliderImage.css';
// import '../../images/'
// const SlideImage = () => {
//     return(
//         <img src="">
//     );
// }

// export default SlideImage;
class Slide extends Component{
    render(){
        return(
            <div className="slideDiv" style={{backgroundImage:"url(/images/slider-bg.jpg)",backgroundSize:'cover'}}>
                
                    <h1 className="slideP1">Sale 20% Off</h1>          
                    <h1 className="slideP2">On Everything</h1>
                    <p className="slideP3">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?
                        Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, 
                        vel architecto veritatis delectus repellat modi impedit sequi.
                    </p>
                    <button className="slideBtn">Shop Now</button>
              
                    
                    {/* <img src={SlideImg} className="SliderImage"/>    */}
            </div>
        );
    }
}

export default Slide;