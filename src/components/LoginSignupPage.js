import R from 'ramda';
import React from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  textField: {
    marginBottom: 15
  },
}

style.textFieldAutoWidth = R.merge(style.textField, { width: 'auto' });

const LoginSignupPage = () => (
  <div id="login-signup">
    <header>
      <h1>Robot Colosseum</h1>
    </header>
    <div id="login">
      <TextField
        style={style.textFieldAutoWidth}
        name="name"
        hintText="Robot name"
        errorText="Incorrect name or password" />
      <TextField
        style={style.textFieldAutoWidth}
        name="password"
        hintText="Password"
        errorText="Incorrect name or password" />
      <RaisedButton label="Log in" primary={true} />
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
  </div>
);

export default LoginSignupPage;
