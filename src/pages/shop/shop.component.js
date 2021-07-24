import React from 'react';

import SHOP_DATA from './shop.data';

import PreViewCollection from '../../components/preview-collection/preview-collection.component';


const ShopPage =(props) =>{

    const collections = SHOP_DATA;

    return (
        <div className='shop-page'>
            {
                collections.map(collection =>(
                    <PreViewCollection 
                    key={collection.id}
                    items = {collection.items}
                    title={collection.title}
                    name={collection.name}  />
                ))
            }
        </div>

    );
}

export default ShopPage;




