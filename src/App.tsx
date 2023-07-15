import { useState } from 'react';

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'BoB',
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: 'Abbas' } });
  };

  return (
    <div>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default App;
