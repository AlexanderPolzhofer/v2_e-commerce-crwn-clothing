import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../contexts/Cart.context';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems
} from './CartDropdown.styles';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map(item => <CartItem
                    key={item.id}
                    cartItem={item}
                />)) : <EmptyMessage>YOUR CART IS EMPTY</EmptyMessage>}
            </CartItems>
            <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>)
}

export default CartDropdown;