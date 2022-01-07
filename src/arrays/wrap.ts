import { isArray } from './is-array';

/**
 * Return the given item in an array, or the given array.
 *
 * @Param {Array | any} arrayOrItem - An array or array item.
 *
 * @Example
 *
 *   wrap([1, 2, 3])
 *   //=> [1, 2, 3]
 *
 *   wrap(1)
 *   //=> [1]
 */
export function wrap<T>(arrayOrItem: T | T[]): T[] {
  if (isArray(arrayOrItem)) {
    return arrayOrItem;
  }

  return [arrayOrItem];
}
