import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutImage,
  CheckoutName,
  CheckoutQuantity,
  CheckoutPrice,
  CheckoutArrow,
  CheckoutValue,
  CheckoutRemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage as="img" src={imageUrl} alt={`${name}`}></CheckoutImage>
      </CheckoutImageContainer>
      <CheckoutName as="span">{name}</CheckoutName>
      <CheckoutQuantity as="span">
        <CheckoutArrow onClick={removeItemHandler}>&#10094;</CheckoutArrow>
        <CheckoutValue as="span">{quantity}</CheckoutValue>
        <CheckoutArrow onClick={addItemHandler}>&#10095;</CheckoutArrow>
      </CheckoutQuantity>
      <CheckoutPrice as="span">{price}</CheckoutPrice>
      <CheckoutRemoveButton onClick={clearItemHandler}>
        &#10005;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
