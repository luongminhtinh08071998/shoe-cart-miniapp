// import React from 'react';

import ShoeList from './ShoeList';

const CartLeft = ({ shoesItem, handleShoeItem }) => {
  return (
    <div>
      <div className="cart" style={{ marginRight: '20px' }}>
        <div className="cart-top">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
        </div>

        <div className="cart-title">Our Products</div>

        <div className="cart-body">
          <ShoeList shoes={shoesItem} handleShoeItem={handleShoeItem} />
        </div>
      </div>
    </div>
  );
};

export default CartLeft;
