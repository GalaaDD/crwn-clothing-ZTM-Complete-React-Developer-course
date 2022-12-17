import {
  CartItemContainer,
  ItemDetails,
  ImgItem,
  ItemName,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <ImgItem as="img" src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName as="span" className="name">
          {name}
        </ItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
