import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setHiddenCart} from '../../reducer/cartReducer';


import './cart-dropdown.styles.scss';

const CartDropDown = () =>{
    const history = useHistory();
    const cartItems = useSelector(state =>  state.cartReducer.cartItems);
    const disptach = useDispatch();
 return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ? ( 
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />)))
            : ( <span className='empty-message'>Your cart is empty </span>  )
        }
        </div>
        <CustomButton onClick={()=>{ 
            history.push('/checkout')
            disptach(setHiddenCart(false))
             } }>
                GO TO CHECKOUT
        </CustomButton>
    </div>
)}

export default CartDropDown;

