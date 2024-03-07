import { useState, useEffect } from 'react';
import { DataShoes } from '../DataShoe';
import ShoeItem from './ShoeItem';

const ShoeList = () => {
  const [shoes, setShoes] = useState([]);

  // console.log("shoes", shoes)

  useEffect(() => {
    setShoes(DataShoes);
  }, []);
  return (
    <div className="shoe-list">
      {shoes.map((shoe) => (
        <ShoeItem key={shoe.id} shoeItem={shoe} />
      ))}
    </div>
  );
};

export default ShoeList;