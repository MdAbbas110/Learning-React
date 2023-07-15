import { useState } from 'react';

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'product1', quantity: 1 },
      { id: 2, title: 'product1', quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default App;

/* exercise 2
const [pizza, setPizza] = useState({
  name: 'Italian',
  topping: ['pineapples'],
});
setPizza({ ...pizza, topping: [...pizza.topping, 'Cheese'] });
*/
