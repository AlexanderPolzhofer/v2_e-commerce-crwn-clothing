import { FC } from 'react';

import { CartItemContainer, ItemDetails } from './CartItem.styles';

import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
    cartItem: TCartItem;
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {

    const { name, quantity, price, imageUrl } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <h2 className="name">{name}</h2>
                <span>{price}</span>
                <span >{quantity}x ${price}</span>
            </ItemDetails>
        </CartItemContainer>)
}

export default CartItem;