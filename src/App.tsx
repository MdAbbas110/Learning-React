import ListGroup from './components/ListGroup';

function App() {
  const city = ['New York', 'Delhi', 'Jaipur', 'Tokyo', 'Las Vegas'];

  return (
    <div>
      <ListGroup items={city} heading='List of cities' />
    </div>
  );
}

export default App;
