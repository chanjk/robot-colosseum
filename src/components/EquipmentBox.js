import React from 'react';
import { List, ListItem } from 'material-ui/List';
import EquipmentRow from './EquipmentRow';

const EquipmentBox = ({ equipment, onChange }) => (
  <List>
    {equipment.map(equipment => (
      <ListItem key={equipment.type}>
        <EquipmentRow type={equipment.type} name={equipment.name} options={equipment.all} onChange={onChange} />
      </ListItem>
    ))}
  </List>
);

export default EquipmentBox;
