
import CartList from './CartList';

const CartRight = ({ cartItems, handleRemoveItem, handleIncrement, handleDecrement }) => {

  // const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // const totalAmount = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

const totalAmount = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);


  return (
    <div>
      <div className="cart">
        <div className="cart-top">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
          <div>Total: {totalQuantity}</div>
        </div>

        <div className="cart-title">
          <span>Your cart</span>
          <span className="cart--amount">${totalAmount.toFixed(2)}</span>
        </div>

        <div className="cart-body">
          <CartList cartItems={cartItems} handleRemoveItem={handleRemoveItem}  handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        </div>
      </div>
    </div>
  );
};

export default CartRight;

