import { useEffect, useState } from 'react';
import './App.css';
import CartLeft from './Components/CartLeft';
import CartRight from './Components/CartRight';
import { DataShoes } from './DataShoe';

function App() {
  const [shoes, setShoes] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  // Currying arrow function in with double calling
  const handleShoeItem = (newItem) => () => {
    const existItem = cartItems.find(item => item.id === newItem.id);
    if (existItem) {
      setCartItems(oldItems => oldItems.map(item => item.id === existItem.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems(oldItems => [...oldItems, { ...newItem, quantity: 1 }]);
    }
  };

  useEffect(() => {
    setShoes(DataShoes);
  }, []);

  const handleRemoveItem = (itemId) => () => {
    setCartItems((olsItems) => olsItems.filter((x) => x.id !== itemId));
  };


  const handleIncrement = (itemId) => () => {
    setCartItems(oldItems => oldItems.map(item => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrement = (itemId) => () => {
    setCartItems(oldItems =>
      oldItems.map(item =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };
  
  
  return (
    <div className="cart-list">
      <CartLeft shoesItem={shoes} handleShoeItem={handleShoeItem} />
      <CartRight cartItems={cartItems} handleRemoveItem={handleRemoveItem} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
    </div>
  );
}

export default App;
