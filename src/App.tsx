//import Alert from './components/Alert';
//import Button from './components/Button';
//import { useState } from 'react';
import { BsFillCalendar2DayFill } from 'react-icons/bs';

import ListGroup from './components/ListGroup';
import './App.css';

function App() {
  const colors = ['Red', 'blue', 'green', 'Black'];
  const heading = 'Pick Color';
  return (
    <div>
      <BsFillCalendar2DayFill color='red' size='40' />
      <ListGroup
        items={colors}
        heading={heading}
        onSelectItem={() => alert('color')}
      />
    </div>
  );
}

export default App;
