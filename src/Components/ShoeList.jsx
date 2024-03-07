import { useState, useEffect } from 'react';
import { DataShoes } from '../DataShoe';
import ShoeItem from './ShoeItem';

const ShoeList = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(DataShoes);
  }, []);


  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems)

  const handleShoeItem = (shoe) => {
    setCartItems(Array.from(shoe));
  }

  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <ShoeItem key={shoe.id} shoeItem={shoe} handleShoeItem={handleShoeItem(shoe)}/>
      ))}
    </div>
  );
};

export default ShoeList;