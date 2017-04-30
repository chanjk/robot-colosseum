import { adjust, merge } from 'ramda';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile } from 'material-ui/GridList';
import PlayerSummaryCard from './PlayerSummaryCard';
import StatBox from './StatBox';
import EquipmentBox from './EquipmentBox';
import UpgradeBox from './UpgradeBox';
import BattleRatingChart from './BattleRatingChart';
import FightMenu from './FightMenu';

// const R = require('ramda');

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
    this.state = this.props.data;
    this.handleStatIncrement = this.handleStatIncrement.bind(this);
    this.handleStatDecrement = this.handleStatDecrement.bind(this);
  }

  handleStatIncrement(name) {
    this.setState(prevState => {
      const idx = prevState.stats.findIndex(stat => stat.name === name);
      return { stats: adjust(this.incrementStat, idx, prevState.stats) }
    });
  }

  handleStatDecrement(name) {
    this.setState(prevState => {
      const idx = prevState.stats.findIndex(stat => stat.name === name);
      return { stats: adjust(this.decrementStat, idx, prevState.stats) }
    });
  }

  incrementStat(stat) {
    return merge(stat, { value: stat.value + 1 });
  }

  decrementStat(stat) {
    return merge(stat, { value: stat.value - 1 });
  }

  render() {
    const { player, stats, equipment, upgrades, ratings } = this.state;

    return <MuiThemeProvider>
      <GridList cellHeight={350} cols={3} padding={10} style={styles.gridList}>
        <GridTile style={styles.gridTile}>
          <PlayerSummaryCard name={player.name} role={player.role} imageUrl={player.imageUrl} />
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
          <BattleRatingChart ratings={ratings} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <FightMenu />
        </GridTile>
      </GridList>
    </MuiThemeProvider>;
  }
}
