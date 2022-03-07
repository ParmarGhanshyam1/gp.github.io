import React from "react";
import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from "../actions/action-types/cart-actions";

const initState = {
    items: [
        {
            id: 1, 
            name: 'Mens shirt',
            img: <img src={p1} alt="Mens Shirt" />,
            price:70
        },
        {
            id: 2, 
            name: 'Mens shirt',
            img: <img src={p2} alt="Mens Shirt" />,
            price:70
        },
        {
            id: 3, 
            name: 'Womens Dress',
            img: <img src={p3} alt="Womens Dress" />,
            price:70
        }
    ],
    addedItems:[],
    total:0
}

const cartReducer = (state = initState, action) => {

    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)

        if(existed_item){
            addedItem.quantity += 1
            return{
                ...state,
                total: state.total + addedItem.price
            }
        }
        else{
            addedItem.quantity = 1;
            //calculating total
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItem:[...state.addedItems, addedItem],
                total: newTotal
            }
        }

    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    // inside cart component
    if(action.type === ADD_QUANTITY){
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
    if(action.type === SUB_QUANTITY){
        let addedItem = state.items.find(item => item.id === action.id) 
        //remove if qty(quantity ) == 0
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        else{
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
    }
    else{
        return state;
    }
    
}

export default cartReducer;