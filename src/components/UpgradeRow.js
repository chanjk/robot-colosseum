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

const UpgradeRow = ({ type, name }) => (
  <div>
    <span style={style.type}>{type}</span>
    <SelectField style={style.select} value={1}>
      <MenuItem value={1} primaryText={name} />
    </SelectField>
  </div>
);

export default UpgradeRow;
