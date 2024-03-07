import { BiTrash } from 'react-icons/bi';

const CartList = ({ cartItems = [], handleRemoveItem }) => {
  return (
    <div>
      {cartItems?.map((item) => (
        <div className="cart-item" key={Math.random() * 1000}>
          <div className="cart-item--left">
            <div className="cart-item--image">
              <img alt={item?.name} src={item?.image} />
            </div>
          </div>
          <div className="cart-item--right">
            <div className="cart-item--name">{item?.name}</div>
            <div className="cart-item--price">${item?.price}</div>
            <div className="cart-item--actions">
              <div className="cart-item--count">
                <div className="cart-item--button">-</div>
                <div className="cart-item--number">1</div>
                <div className="cart-item--button">+</div>
              </div>
              <div
                className="cart-item--remove"
                onClick={handleRemoveItem(item.id)}
              >
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
