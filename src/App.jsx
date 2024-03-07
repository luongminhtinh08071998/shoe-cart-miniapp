import { useEffect, useState } from 'react';
import './App.css';
import CartLeft from './Components/CartLeft';
import CartRight from './Components/CartRight';
import { DataShoes } from './DataShoe';

function App() {
  const [shoes, setShoes] = useState([]);

  const [cartItems, setCartItems] = useState([]); // Storage cart

  // Currying arrow function in with double calling
  const handleShoeItem = (newItem) => () => {
    setCartItems((olsItems) => [...olsItems, newItem]);
  };

  const handleRemoveItem = (itemId) => () => {
    setCartItems((olsItems) => olsItems.filter((x) => x.id !== itemId));
  };

  useEffect(() => {
    setShoes(DataShoes);
  }, []);

  return (
    <div className="cart-list">
      <CartLeft shoesItem={shoes} handleShoeItem={handleShoeItem} />
      <CartRight cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default App;
