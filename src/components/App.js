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

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { player, stats, equipment, upgrades, ratings } = this.props.data;

    return <MuiThemeProvider>
      <GridList cellHeight={350} cols={3} padding={10} style={styles.gridList}>
        <GridTile style={styles.gridTile}>
          <PlayerSummaryCard name={player.name} role={player.role} imageUrl={player.imageUrl} />
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
