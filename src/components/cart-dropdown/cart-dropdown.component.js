import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {useSelector} from 'react-redux';

import './cart-dropdown.styles.scss';

const CartDropDown = () =>{
    
    const cartItems = useSelector(state =>  state.cartReducer.cartItems)
    console.log(cartItems);
 return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />))
        }
        </div>
        <CustomButton>
                GO TO CHECKOUT
        </CustomButton>
    </div>
)}

export default CartDropDown;

