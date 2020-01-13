import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Pallet.css';

class Pallet extends Component {
  state = { level: 500 };

  changeLevel = newLevel => {
    this.setState({ level: newLevel });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const color = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} key={color.hex} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{color}</div>
      </div>
    );
  }
}

export default Pallet;
