import { Format } from './format';
import { Input } from './input';
import { MULTIPLIERS } from './multipliers';

/*
 * Returns the number of bytes based on multiples of bytes
 *
 * @Param {object} input = The byte multiple input
 *
 * @Example
 *
 *   bytes({ kB: 1})
 *   //=> 1000
 */
export const bytes = (obj: Input): number => {
  const [[key, value]]: [Format, number][] = Object.entries(obj) as [Format, number][];

  return MULTIPLIERS[key] * value;
};
