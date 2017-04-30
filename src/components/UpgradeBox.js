import React from 'react';
import {List, ListItem} from 'material-ui/List';
import UpgradeRow from './UpgradeRow';

const UpgradeBox = ({ upgrades }) => (
  <List>
    {upgrades.map(upgrade => (
      <ListItem key={upgrade.type}>
        <UpgradeRow key={upgrade.type} type={upgrade.type} name={upgrade.name} />
      </ListItem>
    ))}
  </List>
);

export default UpgradeBox;
