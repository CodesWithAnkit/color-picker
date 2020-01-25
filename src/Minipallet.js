import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid red',
    '& h1': {
      color: 'white'
    }
  },
  secondary: {
    backgroundColor: 'pink'
  }
};

function Minipallet(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      <h1>React MiniPallet</h1>
      <section className={classes.secondary}>Aklajsfdflkkj</section>
    </div>
  );
}

export default withStyles(styles)(Minipallet);
