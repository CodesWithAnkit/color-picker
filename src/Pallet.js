import React, { Component } from 'react';
import Navbar from './Navbar';
import PalletFooter from './PalletFooter';
import ColorBox from './ColorBox';
import './Pallet.css';

class Pallet extends Component {
  state = { level: 500, format: 'hex' };

  changeLevel = newLevel => {
    this.setState({ level: newLevel });
  };

  changeFormat = val => {
    this.setState({ format: val });
  };

  render() {
    const { colors, palletName, emoji, id } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/pallet/${id}/${color.id}`}
        showLink
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColor
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PalletFooter palletName={palletName} emoji={emoji} />
      </div>
    );
  }
}

export default Pallet;
