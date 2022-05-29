import { useSelector } from 'react-redux';

import {
    selectCartItems,
    selectCartTotal
} from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import PaymentForm from '../../components/payment-form/payment-form.component';

import { CheckoutContainer, CheckoutHeader, Total } from './checkout.styles';

const Checkout = () => {

    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    return (<CheckoutContainer>
        <CheckoutHeader>
            <span>Description</span>
            <span>Name</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
        </CheckoutHeader>
        {cartItems.map((cartItem) =>
            <CheckoutItem
                key={cartItem.id}
                cartItem={cartItem}
            />)}
        <Total>Total: ${cartTotal}</Total>
        <PaymentForm />
    </CheckoutContainer>)

}

export default Checkout;