// import React from 'react';
import CartList from './CartList';

const CartRight = () => {
 return (
  <div>
   <div className="cart">
        <div className="cart-top">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
          <div>Total: 10</div>
        </div>

        <div className="cart-title">
          <span>Your cart</span>
          <span className="cart--amount">$89.97</span>
        </div>

        <div className="cart-body">
          <CartList />
        </div>
      </div>
  </div>
 );
};

export default CartRight;