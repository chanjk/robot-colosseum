import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {CardMedia} from 'material-ui/Card';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <MuiThemeProvider>
      <div>
        <CardMedia>
          <img src="https://static.comicvine.com/uploads/original/11122/111224383/4484237-8931671768-x7_ze.jpg" />
        </CardMedia>
      </div>
    </MuiThemeProvider>;
  }
}
