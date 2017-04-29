import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import PlayerSummaryCard from './PlayerSummaryCard';
import StatBox from './StatBox';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

var stats = ['Attack', 'Defence', 'Accuracy', 'Speed', 'Luck'].map(name => ({ name: name, value: 15 }));

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <MuiThemeProvider>
      <GridList cellHeight={450} style={styles.gridList}>
        <GridTile>
          <PlayerSummaryCard name="Zero" role="Maverick Hunter" imageUrl="https://static.comicvine.com/uploads/original/11122/111224383/4484237-8931671768-x7_ze.jpg" />
        </GridTile>
        <GridTile>
          <StatBox stats={stats} />
        </GridTile>
      </GridList>
    </MuiThemeProvider>;
  }
}
