import React,{useState} from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {useDispatch} from 'react-redux';
import {setHiddenCart} from '../../reducer/cartReducer';


const CartIcon = (props) => {

    const disptach = useDispatch();
    const [hidden,setHidden] = useState(true);

    const toggleCartHidden = () => {
        setHidden(!hidden);
        disptach(setHiddenCart(hidden));
    }

    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>

      );
}
 
export default CartIcon;

