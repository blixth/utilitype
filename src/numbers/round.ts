/*
 * Takes a number and rounds it to the desired number of decimals
 *
 * @Param {number} value = The number to round
 * @Param {number} decimals = Number of decimals
 *
 * @Example
 *
 *   round(0.44, 1)
 *   //=> 0.4
 *
 * @Example
 *
 *   round(0.45, 1)
 *   //=> 0.5
 */

export const round = (value: number, decimals: number): number => Number(`${Math.round(Number(`${value}e${decimals}`))}e-${decimals}`);
