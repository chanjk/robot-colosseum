import React from 'react';
import { List, ListItem } from 'material-ui/List';
import UpgradeRow from './UpgradeRow';

const UpgradeBox = ({ upgrades, onChange }) => (
  <List>
    {Object.keys(upgrades).map(type => (
      <ListItem key={type}>
        <UpgradeRow type={type} name={upgrades[type].find(upgrade => upgrade.in_use).name} options={upgrades[type]} onChange={onChange} />
      </ListItem>
    ))}
  </List>
);

export default UpgradeBox;
