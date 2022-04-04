import React, { Fragment, useContext } from 'react';

import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../components/contexts/UserContext';

import { signOutUserAuth } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const NavigationBar = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUserAuth(currentUser);
        setCurrentUser(null);
    };

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
                            (<span className='nav-link' onClick={signOutHandler}>
                                SIGN OUT
                            </span>) : (<Link className='nav-link' to='/auth'>
                                <span>SIGN IN</span>
                            </Link>)
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>)
}

export default NavigationBar;