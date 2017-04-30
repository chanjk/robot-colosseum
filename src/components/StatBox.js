import React from 'react';
import {List, ListItem} from 'material-ui/List';
import StatRow from './StatRow';

const StatBox = ({ stats }) => (
  <List>
    {stats.map(stat => (
      <ListItem key={stat.name}>
        <StatRow key={stat.name} name={stat.name} value={stat.value} />
      </ListItem>
    ))}
  </List>
);

export default StatBox;
