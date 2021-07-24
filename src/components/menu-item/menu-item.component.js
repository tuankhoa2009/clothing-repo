
import React from 'react';
import './menu-item.styles.scss'
import {useHistory,useRouteMatch} from 'react-router-dom';

const MenuItem = (props)=>{
    const history = useHistory();

    const match = useRouteMatch();

    console.log(props);

    return (
        <div className={`${props.size} menu-item`}
        onClick={() => history.push(`${match.url}${props.linkUrl}`)}
        >

        <div className='background-image' style={{backgroundImage:`url(${props.imageUrl})`}} />
            <div className='content'>
                <h1 className='title'>{props.title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW </span>
            </div>
        </div>
    );
};

export default MenuItem;
