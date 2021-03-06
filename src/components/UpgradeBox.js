import React from 'react';
import { List, ListItem } from 'material-ui/List';
import UpgradeRow from './UpgradeRow';

const UpgradeBox = ({ upgrades, onChange }) => (
  <List>
    {upgrades.map(upgrade => (
      <ListItem key={upgrade.type}>
        <UpgradeRow type={upgrade.type} name={upgrade.name} options={upgrade.all} onChange={onChange} />
      </ListItem>
    ))}
  </List>
);

export default UpgradeBox;
