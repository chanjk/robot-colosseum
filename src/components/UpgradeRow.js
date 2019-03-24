import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const style = {
  type: {
    display: 'inline-block',
    width: '6em',
    verticalAlign: 'middle'
  },
  select: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 'auto',
    padding: 0,
    margin: -8
  }
}

const UpgradeRow = ({ type, name, options, onChange }) => (
  <div>
    <span style={style.type}>{type}</span>
    <SelectField autoWidth={true} style={style.select} value={name} onChange={onChange.bind(this, type)}>
      {options.map(option => (
        <MenuItem key={option.name} value={option.name} primaryText={option.name} />
      ))}
    </SelectField>
  </div>
);

export default UpgradeRow;
