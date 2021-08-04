import React from 'react';

import './checkout-item.styles.scss';
import {removeItemCartAction} from '../../reducer/cartReducer';
import {removeItemCartArrowAction} from '../../reducer/cartReducer';
import {setCartItemAction} from '../../reducer/cartReducer';

import {useDispatch} from 'react-redux';


const CheckoutItem = ({ cartItem }) => 
{
    const { name, imageUrl, price, quantity } = cartItem;
    const disptach = useDispatch();
    return (
        <div className='checkout-item'>
            <div className='image-container'>
            <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>disptach(removeItemCartArrowAction(cartItem))}>&#10094;</div>
                <div className='value'> {quantity} </div>
                <div className='arrow' onClick={()=>disptach(setCartItemAction(cartItem))} >&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>disptach(removeItemCartAction(cartItem))}>&#10005;</div>
        </div>
)};

export default CheckoutItem;