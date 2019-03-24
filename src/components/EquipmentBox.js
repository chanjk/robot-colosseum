import React from 'react';
import { List, ListItem } from 'material-ui/List';
import EquipmentRow from './EquipmentRow';

const EquipmentBox = ({ equipment, onChange }) => (
  <List>
    {Object.keys(equipment).map(type => (
      <ListItem key={type}>
        <EquipmentRow type={type} name={equipment[type].find(equipment => equipment.in_use).name} options={equipment[type]} onChange={onChange} />
      </ListItem>
    ))}
  </List>
);

export default EquipmentBox;
