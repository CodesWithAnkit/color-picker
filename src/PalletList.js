import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Minipallet from './Minipallet';

const styles = {
  root: {
    backgroundColor: 'red',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    color: 'white'
  },
  pallets: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
};
class PalletList extends Component {
  // gotoPallet(id) {
  //   this.props.history.push(`/pallet/${id}`);
  // }
  render() {
    const gotoPallet = id => {
      this.props.history.push(`/pallet/${id}`);
    };
    const { pallets, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Color</h1>
          </nav>
          <div className={classes.pallets}>
            {pallets.map(pallet => (
              <Minipallet
                {...pallet}
                key={pallet.id}
                handleClick={() => gotoPallet(pallet.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PalletList);
