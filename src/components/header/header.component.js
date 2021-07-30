import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = (props) => {

    const currentUser = useSelector((state) =>state.currentUser);

    return (
        <div className='header'>
            <Link className='logo-container' to="/">
              <Logo/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser != null ? (
                    <div className='option' onClick={()=> {auth.signOut()}}>SIGN OUT </div>)
                    : (
                        <Link className='option' to='/signin'>
                        SIGN IN
                        </Link>

                    )}
                {/* <Cart currentUser={props.currentUser} /> */}

            </div>
        </div>
    )
}


export default Header;

