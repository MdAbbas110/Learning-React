//import Alert from './components/Alert';
//import Button from './components/Button';
//import { useState } from 'react';
import ListGroup from './components/ListGroup';
import './App.css';

function App() {
  const colors = ['Red', 'blue', 'green', 'Black'];
  const heading = 'Pick Color';
  return (
    <div>
      <ListGroup
        items={colors}
        heading={heading}
        onSelectItem={() => alert('color')}
      />
    </div>
  );
}

export default App;
