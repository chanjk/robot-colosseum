import R from 'ramda';
import React from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  textField: {
    marginBottom: 20,
    width: 'auto'
  },
  card: {
    width: '60%',
    margin: '20px auto'
  },
  small: {
    fontSize: 12,
    color: '#b6b6b6',
    marginBottom: 12
  }
}

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSignup() {
    this.props.onSignup(this.state.name, this.state.password, this.state.robotType, this.state.role);
  }

  render() {
    return <div id="signup">
      <div id="signup-name-password">
        <TextField
          style={style.textField}
          name="name"
          onChange={this.handleNameChange}
          hintText="Robot name"
          errorText={this.props.errors.name} />
        <TextField
          style={style.textField}
          name="password"
          type="password"
          onChange={this.handlePasswordChange}
          hintText="Password"
          errorText={this.props.errors.password} />
      </div>
      <h2>Choose a robot type</h2>
      <Card style={style.card}>
        <CardMedia>
          <img src="/images/zero_profile.jpg" />
        </CardMedia>
        <CardTitle title="Zero" subtitle="Maverick Hunter" />
        <CardText>
          Power: 4 Armor: 2 Accuracy: 3 Agility: 4 Luck: 2
        </CardText>
      </Card>
      <TextField
        name="role"
        hintText="Role or short description"
        fullWidth={true} />
      <div style={style.small}>If blank, defaults to Maverick Hunter.</div>
      <RaisedButton label="Build robot" primary={true} onClick={this.handleSignup} />
    </div>;
  }
}
