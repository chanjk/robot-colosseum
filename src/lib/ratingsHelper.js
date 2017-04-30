import { __, append, compose, fromPairs, mergeAll, values } from 'ramda';

const calcAttack = (power, accuracy) => Math.floor(power * 2.5 + accuracy * 1.25);
const calcDefence = (armor, agility) => Math.floor(armor * 2.5 + agility * 1.25);
const calcSpeed = agility => Math.floor(agility * 3);

const calcRatings = stats => {
  const { Power, Accuracy, Armor, Agility } = mergeAll(stats.map(stat => compose(fromPairs, append(__, []), values)(stat)));

  return [{
    name: 'Attack',
    value: calcAttack(Power, Accuracy)
  },
  {
    name: 'Defence',
    value: calcDefence(Armor, Agility)
  },
  {
    name: 'Speed',
    value: calcSpeed(Agility)
  }];
};

const ratingsHelper = {
  calcRatings: calcRatings
}

export default ratingsHelper;
