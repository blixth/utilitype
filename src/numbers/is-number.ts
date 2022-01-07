/**
 * Determine whether the given value is a number or not.
 *
 * @param {number} num = The number to compare against.
 *
 * @example
 *
 *   isNumber(0)
 *   //=> true
 *
 *   isNumber(Infinity)
 *   //=> true
 *
 *   isNumber(NaN)
 *   //=> false
 */
export function isNumber(num: any): num is number {
  if (Number.isNaN(num)) {
    return false;
  }

  return typeof num === 'number';
}
