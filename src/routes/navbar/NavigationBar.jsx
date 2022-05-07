import React, { Fragment } from 'react';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from './../../store/user/user.selector';

import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

import CartIcon from '../../components/cart-icon/CartIcon';

import { signOutUserAuth } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const NavigationBar = () => {

    const currentUser = useSelector(selectCurrentUser);

    const isCartOpen = useSelector(selectIsCartOpen)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ?
                            (<span className='nav-link' onClick={signOutUserAuth}>
                                SIGN OUT
                            </span>) : (<Link className='nav-link' to='/auth'>
                                <span>SIGN IN</span>
                            </Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>)
}

export default NavigationBar;