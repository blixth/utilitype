import { round } from '../../numbers/round';

/*
 * Return percent from a given fraction with desired number of decimals
 *
 * @Param {number} fraction = The fraction to transform
 * @Param {number} decimals = Number of decimals
 *
 * @Example
 *
 *   percent(0.1337, 2)
 *   //=> 13.37
 */
export const percent = (fraction: number, decimals = 0): number => round(fraction * 100, decimals);
