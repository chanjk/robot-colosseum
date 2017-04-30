import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    display: 'inline-block',
    padding: '.5em',
    marginRight: '.5em'
  }
}

const EquipmentRow = ({ type, name }) => (
  <div>
    <Paper style={style.paper}>{type}</Paper>
    <Paper style={style.paper}>{name}</Paper>
  </div>
);

export default EquipmentRow;
