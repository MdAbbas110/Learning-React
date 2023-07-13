import Button from './components/Button';

function App() {
  return (
    <div>
      <Button
        color='danger'
        button='Green'
        setOnClick={() => alert('btn clicked')}
      />
    </div>
  );
}

export default App;
