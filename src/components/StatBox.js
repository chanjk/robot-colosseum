import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import StatRow from './StatRow';

const style = {
  subheader: {
    marginBottom: -16
  }
}

const StatBox = ({ stats, available, onIncrement, onDecrement }) => (
  <List>
    <Subheader style={style.subheader}>Available points: {available}</Subheader>
    {Object.keys(stats).map(stat => (
      <ListItem key={stat}>
        <StatRow
          name={stat}
          value={stats[stat]}
          onIncrement={onIncrement}
          onDecrement={onDecrement} />
      </ListItem>
    ))}
  </List>
);

export default StatBox;
