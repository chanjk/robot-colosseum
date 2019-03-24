import R from 'ramda';

const calcAttack = (power, accuracy) => Math.floor(power * 2.5 + accuracy * 1.25);
const calcDefence = (armor, agility) => Math.floor(armor * 2.5 + agility * 1.25);
const calcSpeed = agility => Math.floor(agility * 3);

const calcRatings = stats => {
  return [{
    name: 'Attack',
    value: calcAttack(stats.power, stats.accuracy)
  },
  {
    name: 'Defence',
    value: calcDefence(stats.armor, stats.agility)
  },
  {
    name: 'Speed',
    value: calcSpeed(stats.agility)
  }];
};

const ratingsHelper = {
  calcRatings: calcRatings
}

export default ratingsHelper;
