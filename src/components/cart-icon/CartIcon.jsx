import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
    selectCartCount,
    selectIsCartOpen
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
    ShoppingIcon,
    CartIconContainer,
    ItemCount
}
    from './CartIcon.styles';

const CartIcon = () => {

    const dispatch = useDispatch()

    const cartCount = useSelector(selectCartCount)
    const isCartOpen = useSelector(selectIsCartOpen)

    const toggleIsCartOpen = () =>
        dispatch(
            setIsCartOpen(!isCartOpen)
        )

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toggleIsCartOpen} />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;