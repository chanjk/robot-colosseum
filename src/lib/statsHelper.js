import R from 'ramda';

const MIN_STAT = 5, MAX_STAT = 50;

const change = amount => ((stat, stats, level) => {
  if (amount > calcAvailable(level, stats)) return stats;

  const newStat = R.assoc('value', R.clamp(MIN_STAT, MAX_STAT, stat.value + amount), stat);

  return R.update(stats.indexOf(stat), newStat, stats);
});

const calcMaximumTotal = level => (level - 1) * 3 + 15;
const calcCurrentTotal = stats => R.sum(stats.map(stat => stat.value));
const calcAvailable = (level, stats) => calcMaximumTotal(level) - calcCurrentTotal(stats);

const statsHelper = {
  increment: change(1),
  decrement: change(-1),
  calcAvailable: calcAvailable
}

export default statsHelper;
