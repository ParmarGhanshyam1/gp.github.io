import React, { Component } from "react";
import { connect } from "react-redux";
import { useState } from "react";
import Products from "../Products/Products";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, subtractQuantity } from "../actions/cartActions";

// class Cart extends Component{
//     // to remove item
//     handleRemove = (id) =>{
//         this.props.removeItem(id);
//     }

//     //to add quantity
//     handleAddQuantity = (id) =>{
//         this.props.addQuantity(id);
//     }

//     handleSubtractQuantity = (id) =>{
//         this.props.subtractQuantity(id);
//     }
//     render(){
//         let addedItems = this.props.items.length ?
//         (
//             this.props.items.map(item => {
//                 return(
//                     <li key={item.id}>
//                         <div>
//                             <img src = {item.img} alt={item.img} className=""/>
//                         </div>
//                         <div>
//                             <span>{item.name}</span>
//                             <p>Price:{item.price}$</p>
//                             <p>
//                                 Quantity:{item.quantity}
//                             </p>
//                             <div>
//                                 <Link to="/Cart"><i onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
//                                 <Link to="/Cart"><i onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
//                             </div>
//                             <button onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
//                         </div>
//                     </li>
//                 )
//             })
//         ):
//         (<p>Nothing</p>)
//         return(
//             <div>
//                 <div>
//                     <h4>Ordered Items</h4>
//                     <ul>
//                         {addedItems}
//                     </ul>
//                 </div>
//                 {/* <Recipe /> */}
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) =>{
//     return{
//         items:state.addedItems,
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return{
//         removeItem:(id) => {dispatch(removeItem(id))},
//         addQuantity:(id) => {dispatch(addQuantity(id))},
//         subtractQuantity:(id) => {dispatch(subtractQuantity(id))}
//     }
// }
// export default connect(mapDispatchToProps,mapDispatchToProps)(Cart)


const Cart = (props) => {
    return(
        <>
            <p>Items in Cart</p>

        </>
    );
}

export default Cart;