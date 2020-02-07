import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const { palletName, emoji, id } = this.props.palette;
    const colorPallet = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="singlecolorpallet Palette">
        <Navbar handleChange={this.changeFormat} showingAllColor={false} />
        <div className="Palette-colors">
          {colorPallet}
          <div className="goBack ColorBox">
            <Link to={`/pallet/${id}`} className="back-btn">
              Go Back
            </Link>
          </div>
        </div>
        <PalletFooter palletName={palletName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPallet;
