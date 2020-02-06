import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Pallet from './Pallet';
import ColorPaller from './seedColors';
import { generatePallet } from './ColorHelpers';
import './App.css';
import PalletList from './PalletList';
import seedColors from './seedColors';

class App extends Component {
  findPallet = id => {
    return ColorPaller.find(pallet => pallet.id === id);
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PalletList pallets={seedColors} {...routeProps} />
          )}
        />
        <Route
          path="/pallet/:id"
          render={route => (
            <Pallet
              palette={generatePallet(this.findPallet(route.match.params.id))}
            />
          )}
        />
        <Route
          exact
          path="/pallet/:palletId/:colorId"
          render={() => <h1>Single Pallet Page</h1>}
        />
      </Switch>
    );
  }
}

export default App;
