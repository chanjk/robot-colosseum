import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

const style = {
  name: {
    display: 'inline-block',
    width: '6em'
  },
  paper: {
    display: 'inline-block',
    width: '3em',
    padding: '.5em'
  },
  button: {
    verticalAlign: 'middle',
    padding: 0,
    width: 30,
    height: 30
  },
  buttonIcon: {
    width: 18,
    height: 18
  }
}

const StatRow = ({ name, value, handleIncrement, handleDecrement }) => (
  <div>
    <span style={style.name}>{name}</span>
    <Paper style={style.paper}>{value}</Paper>
    <IconButton iconStyle={style.buttonIcon} style={style.button} onClick={handleIncrement.bind(this, name)}>
      <ContentAdd />
    </IconButton>
    <IconButton iconStyle={style.buttonIcon} style={style.button} onClick={handleDecrement.bind(this, name)}>
      <ContentRemove />
    </IconButton>
  </div>
);

export default StatRow;
