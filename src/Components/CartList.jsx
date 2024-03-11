import { BiTrash } from 'react-icons/bi';

const CartList = ({ cartItems = [], handleRemoveItem, handleIncrement, handleDecrement }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-item--left">
            <div className="cart-item--image">
              <img alt={item.name} src={item.image} />
            </div>
          </div>
          <div className="cart-item--right">
            <div className="cart-item--name">{item.name}</div>
            <div className="cart-item--price">${item.price}</div>
            <div className="cart-item--actions">
              <div className="cart-item--count">
                <div className="cart-item--button" onClick={handleDecrement(item.id)}>-</div>
                <div className="cart-item--number">{item.quantity}</div>
                <div className="cart-item--button" onClick={handleIncrement(item.id)}>+</div>
              </div>
              <div className="cart-item--remove" onClick={handleRemoveItem(item.id)}>
                <BiTrash />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
