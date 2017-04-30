import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const FightMenu = () => (
  <div>
    <RaisedButton label="Fight a random player" primary={true} fullWidth={true} />
    <RaisedButton label="Fight an enemy" secondary={true} fullWidth={true} />
  </div>
);

export default FightMenu;
