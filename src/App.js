import React from 'react';
import Pallet from './Pallet';
import ColorPaller from './seedColors';
import { generatePallet } from './ColorHelpers';
import './App.css';

function App() {
  console.log(generatePallet(ColorPaller[2]));

  return (
    <div className="App">
      <Pallet {...ColorPaller[2]} />
    </div>
  );
}

export default App;
