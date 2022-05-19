import { useSelector } from 'react-redux';

import {
    selectCartItems,
    selectCartTotal
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import PaymentForm from '../../components/payment-form/payment-form.component';

import './checkout.styles.scss';

const Checkout = () => {

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

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
        <PaymentForm />
    </div>)

}

export default Checkout;