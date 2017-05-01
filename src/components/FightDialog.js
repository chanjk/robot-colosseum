import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ResultDialog from './ResultDialog';

export default class FightDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const action = <ResultDialog onTouchTap={this.handleClose} />

    return <div>
      <RaisedButton label="Fight a random player" primary={true} fullWidth={true} onTouchTap={this.handleOpen} />
      <RaisedButton label="Fight an enemy" secondary={true} fullWidth={true} onTouchTap={this.handleOpen} />
      <Dialog title="You are fighting Sigma!" actions={action} modal={true} open={this.state.open} onRequestClose={this.handleClose}>
        <img style={{float:'left', height: 200}} src="/images/zero_running.gif" />
        <img style={{float:'right', height: 200}} src="/images/sigma_standing_ready.gif" />
      </Dialog>
    </div>;
  }
}
