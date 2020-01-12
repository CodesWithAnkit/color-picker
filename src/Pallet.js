import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallet.css';

class Pallet extends Component {
  render() {
    const color = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} key={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="Palette-colors">{color}</div>
      </div>
    );
  }
}

export default Pallet;
