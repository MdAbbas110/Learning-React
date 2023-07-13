import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> Alert</Alert>
      )}
      <Button
        color='dark'
        button='Green'
        setOnClick={() => setAlertVisibility(true)}
      />
    </div>
  );
}

export default App;
