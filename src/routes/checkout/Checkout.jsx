import { useContext } from 'react';

import { CartContext } from '../../components/contexts/CartContext';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import './checkout.styles.scss';

const Checkout = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return (<div className='checkout-container'>
        <div className='checkout-header'>
            <span>Description</span>
            <span>Name</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
        </div>
        {cartItems.map((cartItem) =>
            <CheckoutItem
                key={cartItem.id}
                cartItem={cartItem}
            />)}
        <span className='total'>Total: ${cartTotal}</span>
    </div>)

}

export default Checkout;