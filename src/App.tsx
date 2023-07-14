//import Alert from './components/Alert';
// import Button from './components/Button';s
//import { useState } from 'react';
// import { BsFillCalendar2DayFill } from 'react-icons/bs';

import Like from './components/Like';

// import ListGroup from './components/ListGroup';
// import './App.css';

function App() {
  return (
    <div>
      <Like onClick={() => alert('Liked the Post')} />
    </div>
  );
}

export default App;
