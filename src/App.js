import React from 'react';
import Pallet from './Pallet';
import ColorPaller from './seedColors';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pallet {...ColorPaller[2]} />
    </div>
  );
}

export default App;
