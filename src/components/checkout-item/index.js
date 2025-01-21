import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addQuantity = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeQuantity = () => dispatch(removeItemToCart(cartItems, cartItem));

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeQuantity}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addQuantity}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
