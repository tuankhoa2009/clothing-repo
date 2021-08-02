import React,{useState} from 'react';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { useDispatch,useSelector } from 'react-redux';
import { setCartItemAction } from '../../reducer/cartReducer';

const CollectionItem =({id,name,price,imageUrl}) =>{

    const dispatch = useDispatch();
    const [item,setItem] = useState(null);
    const state = useSelector((state)=> state.cartReducer.cartItems)

    const addItemsToCart =  () => {
        
         dispatch(setCartItemAction({
            id:id,
            name:name,
            price:price,
            imageUrl:imageUrl,
        }));
    }


    return (
    <div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={addItemsToCart}  inverted> Add to Cart </CustomButton>
    </div>

)}

export default CollectionItem;
