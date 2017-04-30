import React from 'react';
import {List, ListItem} from 'material-ui/List';
import StatRow from './StatRow';

const StatBox = ({ stats }) => (
  <List>
    {stats.map(stat => (
      <ListItem
        key={stat.name}
        children={<StatRow key={stat.name} name={stat.name} value={stat.value} />} />
    ))}
  </List>
);

export default StatBox;
