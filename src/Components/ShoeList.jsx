import { useState, useEffect } from 'react';
import { DataShoes } from '../DataShoe';
import ShoeItem from './ShoeItem';
import CartList from './CartList';

const ShoeList = () => {
  const [shoes, setShoes] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  // Currying arrow function in with double calling
  const handleShoeItem = (newItem) => () => {
    setCartItems((olsItems) => [...olsItems, newItem]);
  };

  // Log the cart has all shoes was added
  console.log(cartItems);

  useEffect(() => {
    setShoes(DataShoes);
  }, []);

  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <ShoeItem
          key={shoe.id}
          shoeItem={shoe}
          handleShoeItem={handleShoeItem}
        />
      ))}
      <CartList cartItems ={cartItems}/>
    </div>
  );
};

export default ShoeList;
