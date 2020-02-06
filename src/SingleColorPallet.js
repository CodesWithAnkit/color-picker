import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPallet extends Component {
  _shades = this.gatherPallets(this.props.palette, this.props.colorId);

  gatherPallets(palettes, colorToFilterBy) {
    let shades = [];
    let allColors = palettes.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }

  render() {
    // const { _shades } = this;
    const colorPallet = this._shades.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>Single Color Pallet</h1>
        <div className="Palette-colors">{colorPallet}</div>
      </div>
    );
  }
}

export default SingleColorPallet;
