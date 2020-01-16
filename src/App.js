import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Pallet from './Pallet';
import ColorPaller from './seedColors';
import { generatePallet } from './ColorHelpers';
import './App.css';

class App extends Component {
  findPallet = id => {
    return ColorPaller.find(pallet => pallet.id === id);
  };

  render() {
    console.log(generatePallet(ColorPaller[2]));

    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Hello world</h1>} />
        <Route
          path="/pallet/:id"
          render={route => (
            <Pallet
              palette={generatePallet(this.findPallet(route.match.params.id))}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
