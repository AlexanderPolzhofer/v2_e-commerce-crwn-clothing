import { FC } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Button, { BUTTON_TYPES } from "../button/Button";

import { addItemToCart } from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
    ProductCardContainer,
    Footer,
    Name,
    Price,
    AddButton
} from "./product-card.styles";

import { CategoryItem } from '../../store/categories/category.types';

type ProductCardProps = {
    product: CategoryItem;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {

    const { name, price, imageUrl } = product;

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <AddButton
                buttonType={BUTTON_TYPES.inverted}
                onClick={addProductToCart}
            >
                ADD TO CART
            </AddButton>
        </ProductCardContainer>)
}

export default ProductCard;