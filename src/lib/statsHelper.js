import { clamp, merge } from 'ramda';

const MIN_STAT = 5, MAX_STAT = 50;

const change = amount =>
  (stat => merge(stat, { value: clamp(MIN_STAT, MAX_STAT, stat.value + amount) }));

const statsHelper = {
  increment: change(1),
  decrement: change(-1)
}

export default statsHelper;
