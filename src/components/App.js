import R from 'ramda';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginSignupPage from './LoginSignupPage';
import { GridList, GridTile } from 'material-ui/GridList';
import PlayerSummaryCard from './PlayerSummaryCard';
import StatBox from './StatBox';
import EquipmentBox from './EquipmentBox';
import UpgradeBox from './UpgradeBox';
import BattleRatingChart from './BattleRatingChart';
import FightDialog from './FightDialog';
import statsHelper from '../lib/statsHelper';
import ratingsHelper from '../lib/ratingsHelper';

const style = {
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
    this.state = props.data;
    this.state.errors = {}
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleStatIncrement = this.handleStatChangeWith(statsHelper.increment);
    this.handleStatDecrement = this.handleStatChangeWith(statsHelper.decrement);
    this.handleEquipmentChange = this.handleEquipmentChange.bind(this);
    this.handleUpgradeChange = this.handleUpgradeChange.bind(this);
    injectTapEventPlugin();
  }

  handleLogin(name, password) {
    if (name && password) {
      fetch('/api/players/' + name).then(res => res.json().then(user => {
        if (user) {
          this.setState({ user: user });
        } else {
          this.setState({
            errors: {
              login: {
                name: 'Invalid name or password',
                password: 'Invalid name or password'
              }
            }
          });
        }
      }));
    } else {
      const loginErrors = {}

      if (!name) loginErrors.name = 'Name cannot be blank.';
      if (!password) loginErrors.password = 'Password cannot be blank.';

      this.setState({ errors: { login: loginErrors } });
    }
  }

  handleSignup(name, password, robotType, role) {
    if (name && password) {
      fetch('/api/players/' + name).then(res => res.json().then(user => {
        if (user) {
          this.setState({
            errors: {
              signup: {
                name: 'Name has already been taken.',
              }
            }
          });
        } else {
          this.setState({ user: 'Zero' });
        }
      }));
    } else {
      const signupErrors = {}

      if (!name) signupErrors.name = 'Name cannot be blank.';
      if (!password) signupErrors.password = 'Password cannot be blank.';

      this.setState({ errors: { signup: signupErrors } });
    }
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
      return { equipment: R.adjust(R.assoc('name', value, R.__), idx, prevState.equipment) }
    });
  }

  handleUpgradeChange(type, event, index, value) {
    this.setState(prevState => {
      const idx = prevState.upgrades.findIndex(upgrade => upgrade.type === type);
      return { upgrades: R.adjust(R.assoc('name', value, R.__), idx, prevState.upgrades) }
    });
  }

  render() {
    if (!this.state.user) {
      return <MuiThemeProvider>
        <LoginSignupPage onLogin={this.handleLogin} onSignup={this.handleSignup} loginErrors={this.state.errors.login} signupErrors={this.state.errors.signup} />
      </MuiThemeProvider>;
    }

    const { player, stats, equipment, upgrades } = this.state;

    return <MuiThemeProvider>
      <GridList cellHeight={350} cols={3} padding={10} style={style.gridList}>
        <GridTile style={style.gridTile}>
          <PlayerSummaryCard player={player} />
        </GridTile>
        <GridTile style={style.gridTile}>
          <StatBox stats={stats} available={statsHelper.calcAvailable(player.level, stats)} onIncrement={this.handleStatIncrement} onDecrement={this.handleStatDecrement} />
        </GridTile>
        <GridTile style={style.gridTile}>
          <EquipmentBox equipment={equipment} onChange={this.handleEquipmentChange} />
        </GridTile>
        <GridTile style={style.gridTile}>
          <UpgradeBox upgrades={upgrades} onChange={this.handleUpgradeChange} />
        </GridTile>
        <GridTile style={style.gridTile}>
          <BattleRatingChart ratings={ratingsHelper.calcRatings(stats)} />
        </GridTile>
        <GridTile style={style.gridTile}>
          <FightDialog />
        </GridTile>
      </GridList>
    </MuiThemeProvider>;
  }
}
