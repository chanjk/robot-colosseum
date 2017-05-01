import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import StatRow from './StatRow';

const style = {
  subheader: {
    marginBottom: -16
  }
}

const StatBox = ({ stats, available, handleIncrement, handleDecrement }) => (
  <List>
    <Subheader style={style.subheader}>Available points: {available}</Subheader>
    {stats.map(stat => (
      <ListItem key={stat.name}>
        <StatRow
          name={stat.name}
          value={stat.value}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement} />
      </ListItem>
    ))}
  </List>
);

export default StatBox;
