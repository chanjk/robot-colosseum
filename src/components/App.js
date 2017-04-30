import { adjust } from 'ramda';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile } from 'material-ui/GridList';
import PlayerSummaryCard from './PlayerSummaryCard';
import StatBox from './StatBox';
import EquipmentBox from './EquipmentBox';
import UpgradeBox from './UpgradeBox';
import BattleRatingChart from './BattleRatingChart';
import FightMenu from './FightMenu';
import statsHelper from '../lib/statsHelper';
import ratingsHelper from '../lib/ratingsHelper';

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
    border: '1px solid black',
    overflowY: 'auto'
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.data;
    this.handleStatIncrement = this.handleStatIncrement.bind(this);
    this.handleStatDecrement = this.handleStatDecrement.bind(this);
  }

  handleStatIncrement(name) {
    this.setState(prevState => {
      const idx = prevState.stats.findIndex(stat => stat.name === name);
      return { stats: adjust(statsHelper.increment, idx, prevState.stats) }
    });
  }

  handleStatDecrement(name) {
    this.setState(prevState => {
      const idx = prevState.stats.findIndex(stat => stat.name === name);
      return { stats: adjust(statsHelper.decrement, idx, prevState.stats) }
    });
  }

  render() {
    const { player, stats, equipment, upgrades } = this.state;

    return <MuiThemeProvider>
      <GridList cellHeight={350} cols={3} padding={10} style={styles.gridList}>
        <GridTile style={styles.gridTile}>
          <PlayerSummaryCard player={player} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <StatBox stats={stats} handleIncrement={this.handleStatIncrement} handleDecrement={this.handleStatDecrement} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <EquipmentBox equipment={equipment} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <UpgradeBox upgrades={upgrades} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <BattleRatingChart ratings={ratingsHelper.calcRatings(stats)} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <FightMenu />
        </GridTile>
      </GridList>
    </MuiThemeProvider>;
  }
}
