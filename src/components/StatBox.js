import React from 'react';
import {List, ListItem} from 'material-ui/List';
import StatInput from './StatInput';

const StatBox = ({ stats }) => (
  <List>
    {stats.map(stat => (
      <ListItem
        key={stat.name}
        children={<StatInput key={stat.name} name={stat.name} value={stat.value} />} />
    ))}
  </List>
);

export default StatBox;
