import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import PlayerSummaryCard from './PlayerSummaryCard';
import StatBox from './StatBox';
import EquipmentBox from './EquipmentBox';
import UpgradeBox from './UpgradeBox';
import BattleRatingChart from './BattleRatingChart';
import FightMenu from './FightMenu';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%'
  },
  gridTile: {
    border: '1px solid black'
  }
};

var stats = ['Power', 'Armor', 'Accuracy', 'Agility', 'Luck'].map(name => ({ name: name, value: 15 }));

var equipment = [
  {
    type: 'Head',
    name: 'Basic Helmet'
  },
  {
    type: 'Left Arm',
    name: 'Z-Buster'
  },
  {
    type: 'Right Arm',
    name: 'Z-Saber'
  },
  {
    type: 'Body',
    name: 'Basic Armor'
  },
  {
    type: 'Feet',
    name: 'Dash Boots'
  }
];

var upgrades = [
  {
    type: 'Head',
    name: 'None'
  },
  {
    type: 'Left Arm',
    name: 'Double Shot'
  },
  {
    type: 'Right Arm',
    name: 'Energy Buster'
  },
  {
    type: 'Body',
    name: 'None'
  },
  {
    type: 'Feet',
    name: 'Wind Dash'
  }
];

var ratings = [
  {
    name: 'Attack',
    value: 100
  },
  {
    name: 'Defence',
    value: 80
  },
  {
    name: 'Speed',
    value: 120
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <MuiThemeProvider>
      <GridList cellHeight={350} cols={3} padding={10} style={styles.gridList}>
        <GridTile style={styles.gridTile}>
          <PlayerSummaryCard name="Zero" role="Maverick Hunter" imageUrl="https://static.comicvine.com/uploads/original/11122/111224383/4484237-8931671768-x7_ze.jpg" />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <StatBox stats={stats} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <EquipmentBox equipment={equipment} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <UpgradeBox upgrades={upgrades} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <BattleRatingChart ratings={ratings} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <FightMenu />
        </GridTile>
      </GridList>
    </MuiThemeProvider>;
  }
}
