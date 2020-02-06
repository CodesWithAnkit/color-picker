import React, { Component } from 'react';
import ColorBox from './ColorBox';
import PalletFooter from './PalletFooter';
import Navbar from './Navbar';

class SingleColorPallet extends Component {
  _shades = this.gatherPallets(this.props.palette, this.props.colorId);

  state = {
    format: 'hex'
  };

  changeFormat = val => {
    this.setState({ format: val });
  };

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
    const { format } = this.state;
    const { palletName, emoji } = this.props.palette;
    const colorPallet = this._shades.map(color => (
      <ColorBox
        key={color.hex}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} showingAllColor={false} />
        <div className="Palette-colors">{colorPallet}</div>
        <PalletFooter palletName={palletName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPallet;
