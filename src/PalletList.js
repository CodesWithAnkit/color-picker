import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Minipallet from './Minipallet';

class PalletList extends Component {
  render() {
    const { pallets } = this.props;
    return (
      <div>
        <h1>React Color</h1>
        {pallets.map(pallet => (
          <p>
            <Link to={`/pallet/${pallet.id}`}>{pallet.paletteName}</Link>
          </p>
        ))}
        <Minipallet />
      </div>
    );
  }
}

export default PalletList;
