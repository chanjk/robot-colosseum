import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  textField: {
    marginBottom: 20,
    width: 'auto'
  }
}

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleLogin() {
    this.props.onLogin(this.state.name, this.state.password);
  }

  render() {
    return <div id="login">
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
      <RaisedButton label="Log in" primary={true} onClick={this.handleLogin} />
    </div>;
  }
}
