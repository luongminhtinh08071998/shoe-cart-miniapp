// import React from 'react';
import { BiTrash } from "react-icons/bi";

const CartItem = ({item}) => {

  console.log("item", item);

 return (
  <div className="cart-item">
            <div className="cart-item--left">
              <div className="cart-item--image">
                <img
                  alt=""
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png"
                />
              </div>
            </div>
            <div className="cart-item--right">
              <div className="cart-item--name">
                Nike Air Zoom Pegasus 36 Shield
              </div>
              <div className="cart-item--price">$89.97</div>
              <div className="cart-item--actions">
                <div className="cart-item--count">
                  <div className="cart-item--button">-</div>
                  <div className="cart-item--number">1</div>
                  <div className="cart-item--button">+</div>
                </div>
                <div className="cart-item--remove">
                  <BiTrash />
                </div>
              </div>
            </div>
          </div>
 );
};

export default CartItem;