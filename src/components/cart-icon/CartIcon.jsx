import { useContext } from 'react';

import { CartContext } from '../contexts/Cart.context';

import {
    ShoppingIcon,
    CartIconContainer,
    ItemCount
}
    from './CartIcon.styles';

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toggleIsCartOpen} />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;