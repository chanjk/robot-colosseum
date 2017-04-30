import { clamp, curry, merge } from 'ramda';

const MIN_STAT = 0, MAX_STAT = 99;

const change = curry((amount, stat) =>
  merge(stat, { value: clamp(MIN_STAT, MAX_STAT, stat.value + amount) })
);

const statsHelper = {
  increment: change(1),
  decrement: change(-1)
}

export default statsHelper;
