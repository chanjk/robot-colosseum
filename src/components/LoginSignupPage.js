import R from 'ramda';
import React from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  textField: {
    marginBottom: 20
  },
}

style.textFieldAutoWidth = R.merge(style.textField, { width: 'auto' });

export default class LoginSignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMessages: {} }
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
    if (this.state.name && this.state.password) {
      fetch('/api/players/' + this.state.name)
      .then(res => res.json().then(data => {
        if (data) {
          this.props.onLogin();
        } else {
          this.setState({ errorMessages: {
            name: 'Incorrect name or password',
            password: 'Incorrect name or password'
          }});
        }
      }));
    } else {
      const errorMessages = {}

      if (!this.state.name) {
        errorMessages.name = 'Name cannot be blank.';
      }

      if (!this.state.password) {
        errorMessages.password = 'Password cannot be blank.';
      }

      this.setState({ errorMessages: errorMessages });
    }
  }

  render() {
    return <div id="login-signup">
      <header>
        <h1>Robot Colosseum</h1>
      </header>
      <div id="login">
        <TextField
          style={style.textFieldAutoWidth}
          name="name"
          onChange={this.handleNameChange}
          hintText="Robot name"
          errorText={this.state.errorMessages.name} />
        <TextField
          style={style.textFieldAutoWidth}
          name="password"
          type="password"
          onChange={this.handlePasswordChange}
          hintText="Password"
          errorText={this.state.errorMessages.password} />
        <RaisedButton label="Log in" primary={true} onClick={this.handleLogin} />
      </div>
      <h4>Or, if you want to create a new robot</h4>
      <div id="signup">
        <TextField
          style={style.textFieldAutoWidth}
          name="new-name"
          hintText="Robot name"
          errorText="This name has already been taken." />
        <h2>Choose a robot type</h2>
        <Card style={{ width: '60%', margin: '20px auto' }}>
          <CardMedia>
            <img src="/images/zero_profile.jpg" />
          </CardMedia>
          <CardTitle title="Zero" subtitle="Maverick Hunter" />
          <CardText>
            Power: 4 Armor: 2 Accuracy: 3 Agility: 4 Luck: 2
          </CardText>
        </Card>
        <TextField
          style={style.textField}
          name="new-role"
          hintText="Role or short description"
          errorText="If blank, defaults to Maverick Hunter."
          fullWidth={true} />
        <RaisedButton label="Build robot" primary={true} />
      </div>
    </div>;
  }
}
