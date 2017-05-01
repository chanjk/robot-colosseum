import { adjust, merge } from 'ramda';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile } from 'material-ui/GridList';
import PlayerSummaryCard from './PlayerSummaryCard';
import StatBox from './StatBox';
import EquipmentBox from './EquipmentBox';
import UpgradeBox from './UpgradeBox';
import BattleRatingChart from './BattleRatingChart';
import FightDialog from './FightDialog';
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
    super(props);
    this.state = this.props.data;
    this.handleStatIncrement = this.handleStatChangeWith(statsHelper.increment);
    this.handleStatDecrement = this.handleStatChangeWith(statsHelper.decrement);
    this.handleEquipmentChange = this.handleEquipmentChange.bind(this);
    this.handleUpgradeChange = this.handleUpgradeChange.bind(this);
    injectTapEventPlugin();
  }

  handleStatChangeWith(handler) {
    return name => this.setState(prevState => {
      const stat = prevState.stats.find(stat => stat.name === name);
      return { stats: handler(stat, prevState.stats, prevState.player.level) }
    });
  }

  handleEquipmentChange(type, event, index, value) {
    this.setState(prevState => {
      const idx = prevState.equipment.findIndex(equipment => equipment.type === type);
      return { equipment: adjust(equipment => merge(equipment, { name: value }), idx, prevState.equipment) }
    });
  }

  handleUpgradeChange(type, event, index, value) {
    this.setState(prevState => {
      const idx = prevState.upgrades.findIndex(upgrade => upgrade.type === type);
      return { upgrades: adjust(upgrade => merge(upgrade, { name: value }), idx, prevState.upgrades) }
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
          <StatBox stats={stats} available={statsHelper.calcAvailable(player.level, stats)} onIncrement={this.handleStatIncrement} onDecrement={this.handleStatDecrement} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <EquipmentBox equipment={equipment} onChange={this.handleEquipmentChange} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <UpgradeBox upgrades={upgrades} onChange={this.handleUpgradeChange} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <BattleRatingChart ratings={ratingsHelper.calcRatings(stats)} />
        </GridTile>
        <GridTile style={styles.gridTile}>
          <FightDialog />
        </GridTile>
      </GridList>
    </MuiThemeProvider>;
  }
}
