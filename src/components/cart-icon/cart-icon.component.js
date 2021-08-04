import React,{useState} from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {useDispatch,useSelector} from 'react-redux';
import {setHiddenCart} from '../../reducer/cartReducer';


const CartIcon = (props) => {

    const disptach = useDispatch();
    const [hidden,setHidden] = useState(true);
    const cartItems = useSelector(state =>  state.cartReducer.cartItems)
    const countItems = cartItems.reduce((accumalatedQuantity,cartItem) => accumalatedQuantity + cartItem.quantity  ,0)

    const toggleCartHidden = () => {
        setHidden(!hidden);
        disptach(setHiddenCart(hidden));
    }

    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{countItems}</span>
        </div>

      );
}
 
export default CartIcon;

