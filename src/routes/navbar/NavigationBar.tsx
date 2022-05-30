import { Fragment, lazy } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/CartIcon';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

import { Navigation, LogoContainer, NavLinksContainer, NavLink } from './navigation-bar.styles';

const CartDropdown = lazy(() => import('../../components/cart-dropdown/CartDropdown'));

const NavigationBar = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());

    return (
        <Fragment>
            <Navigation>
                <LogoContainer to='/'>
                    <CrwnLogo />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ?
                            (<NavLink as='span' onClick={signOutUser}>
                                SIGN OUT
                            </NavLink>) : (<NavLink to='/auth'>
                                <span>SIGN IN</span>
                            </NavLink>)
                    }
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </Navigation>
            <Outlet />
        </Fragment>)
}

export default NavigationBar;