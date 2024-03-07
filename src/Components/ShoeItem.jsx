// import React from 'react';

// import { useState } from "react";

const ShoeItem = ({handleShoeItem, shoeItem}) => {
  const shoe = shoeItem;
  // console.log(shoeItem)

  return (
    <div className="shoe-item">
      <div
        className="shoe-item--image"
        style={{ backgroundColor: shoe.color }}
      >
        <img
          alt={shoe.name}
          src={shoe.image}
        />
      </div>
      <div className="shoe-item--name">{shoe.name}</div>
      <div className="shoe-item--description">
        {shoe.description}
      </div>
      <div className="shoe-item--footer">
        <div className="shoe-item--price">${shoe.price}</div>
        <div className="shoe-item--button" onClick={() => handleShoeItem}>
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
};

export default ShoeItem;

