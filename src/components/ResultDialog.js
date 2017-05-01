import R from 'ramda';
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class ResultDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = R.compose(this.props.onTouchTap, this.handleClose.bind(this));
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const action = <FlatButton label="OK" primary={true} onTouchTap={this.handleClose} />

    return <div>
      <RaisedButton label="See result" primary={true} onTouchTap={this.handleOpen} />
      <Dialog title="You win the fight!" actions={action} open={this.state.open} onRequestClose={this.handleClose}>
        <img style={{float:'left', height: 200}} src="https://tcrf.net/images/b/ba/MMX4_Zeroweapget.png" />
        <span>You earned 200 EXP, 100 Metals!</span>
      </Dialog>
    </div>;
  }
}
