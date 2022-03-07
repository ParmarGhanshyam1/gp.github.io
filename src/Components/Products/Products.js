import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import './Products.css';
import { addToCart } from "../actions/cartActions";

import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
// import p4 from '../../images/p4.png';
// import p5 from '../../images/p5.png';
// import p6 from '../../images/p6.png';
// import p7 from '../../images/p7.png';
// import p8 from '../../images/p8.png';
// import p9 from '../../images/p9.png';
// import p10 from '../../images/p10.png';
// import p11 from '../../images/p11.png';
// import p12 from '../../images/p12.png';



const products = [
    {
        id: 1, 
        name: 'Mens shirt',
        img: <img src={p1} alt="Mens Shirt" />,
        price:'$70'
    },
    {
        id: 2, 
        name: 'Mens shirt',
        img: <img src={p2} alt="Mens Shirt" />,
        price:'$70'
    },
    {
        id: 3, 
        name: 'Womens Dress',
        img: <img src={p3} alt="Womens Dress" />,
        price:'$70'
    }

];

// const cartReducer = (state = initState, action) =>{

//         return state;
// }

// class Products extends Component{
//     render(){
//         let itemList = this.props.items.map(item => {
//             return(
//                 <div key={item.id}>
//                     <div>
//                         <img src={item.img} alt={item.title} />
//                         <span>{item.title}</span>
//                         <span>add</span>
//                     </div>

//                     <div>
//                         <p>Price:{item.price}$</p>
//                     </div>
//                 </div>
//             )
//         })
//         return(
//             <div>
//                 <h1>Our Products</h1>
//                 <div>
//                     {itemList}
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) =>{
//     return{
//         items: state.items
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         addToCart: (id) =>{dispatch(addToCart(id))}
//     }
// }

// export default connect(mapStateToProps)(Products)


const Products = (props) => {
    return(
        <div className="productList">
            <h1>Our Products</h1>
            <table>
                <tr>
                    {products.map(products => (
                        <td>
                            
                            {products.img}
                        </td>
                    ))}
                </tr>
                <tr>
                    {products.map(products => (
                        <td>
                            {products.name}
                            {products.price}
                        </td>
                    ))}
                </tr>
                <tr>
                    {products.map(products =>(
                        <td>
                            <prd key={products.id}></prd>
                            <button onClick="onAdd">Add to Cart</button>
                        </td>
                    ))}
                </tr>

                
            </table>
        </div>
    )

    const onAdd = (props) => {
        return(
            <p>Item Added</p>
        )
    }   
    
}
// const App = () => {
//     const[isShown, setIsShown] = useState(false);
//     return(
//         <div>
//             <button
//                 onMouseEnter={() => setIsShown(true)}
//                 onMouseLeave={() => setIsShown(false)}>
//             </button>
//             {isShown && (
//                 <div>
//                     <button>Add to Cart</button>
//                     <button>Buy Now</button>
//                  </div>
//             )}
//         </div>
//     );
// }

export default Products;

// <ul key={ products.id}>
                     
                        //         <li>{products.name}</li>
                        //         <li>{products.img} </li>
                        //         <li>{products.price} </li>
                            
                        //