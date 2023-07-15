//import Alert from './components/Alert';
// import Button from './components/Button';s
import { useState } from 'react';
// import { BsFillCalendar2DayFill } from 'react-icons/bs';

//import { useState } from 'react';
//import Like from './components/Like';

// import ListGroup from './components/ListGroup';
// import './App.css';
// import Message from './Message';
//import produce from 'immer'
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
  const [product, setProduct] = useState([
    'Acer Monitor',
    'Boat Atom',
    'Slider',
  ]);

  return (
    <div>
      <NavBar cartCount={product.length} />
      <Cart cartItems={product} onClear={() => setProduct([])} />
    </div>
  );
}

export default App;
