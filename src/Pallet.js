import React, { Component } from 'react';
import Navbar from './Navbar';
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
    const { colors } = this.props.palette;
    const { level, format } = this.state;

    const color = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} key={color.hex} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{color}</div>
      </div>
    );
  }
}

export default Pallet;
