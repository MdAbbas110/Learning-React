//import Alert from './components/Alert';
// import Button from './components/Button';s
//import { useState } from 'react';
// import { BsFillCalendar2DayFill } from 'react-icons/bs';

//import { useState } from 'react';
//import Like from './components/Like';

// import ListGroup from './components/ListGroup';
// import './App.css';
// import Message from './Message';

import { useState } from 'react';

function App() {
  const [city, setCity] = useState({
    name: 'July',
    address: {
      city: 'Ghazpur',
      pinCode: 233002,
    },
  });

  const handleCity = () => {
    setCity({
      ...city,
      address: { ...city.address, pinCode: 233001 },
    });
  };

  return (
    <div>
      <button onClick={handleCity}>Click Me</button>
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
