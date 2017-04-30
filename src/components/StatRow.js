import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

const style = {
  paper: {
    display: 'inline-block',
    padding: '.5em',
    marginRight: '.5em'
  },
  button: {
    minWidth: 25,
    verticalAlign: 'middle',
    lineHeight: 'auto',
    height: 'auto'
  }
}

const StatRow = ({ name, value, handleIncrement, handleDecrement }) => (
  <div>
    <Paper style={style.paper}>{name}</Paper>
    <Paper style={style.paper}>{value}</Paper>
    <FlatButton style={style.button} onClick={handleIncrement.bind(this, name)}>
      <ContentAdd />
    </FlatButton>
    <FlatButton style={style.button} onClick={handleDecrement.bind(this, name)}>
      <ContentRemove />
    </FlatButton>
  </div>
);

export default StatRow;
