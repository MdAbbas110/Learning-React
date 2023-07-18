import { useEffect } from 'react';

const connect = () => console.log('Connected');
const disconnecting = () => console.log('Disconnecting');

function App() {
  useEffect(() => {
    connect();

    return disconnecting();
  });
  return <div></div>;
}

export default App;
