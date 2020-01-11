import React from 'react';
import Pallet from './Pallet';
import ColorPaller from './seedColors';

function App() {
  return (
    <div className="App">
      <Pallet {...ColorPaller[4]} />
    </div>
  );
}

export default App;
