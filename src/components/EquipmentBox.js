import React from 'react';
import { List, ListItem } from 'material-ui/List';
import EquipmentRow from './EquipmentRow';

const EquipmentBox = ({ equipment }) => (
  <List>
    {equipment.map(item => (
      <ListItem key={item.type}>
        <EquipmentRow key={item.type} type={item.type} name={item.name} />
      </ListItem>
    ))}
  </List>
);

export default EquipmentBox;
