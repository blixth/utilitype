import { isMissing } from '../any/is-missing';

/*
 * Checks if there is an array present
 *
 * @Example
 *
 *   isPresent([1, 2, 3])
 *   //=> true
 *
 *   isPresent([])
 *   //=> false
 *
 *   isPresent(null)
 *   //=> false
 *
 *   isPresent(undefined)
 *   //=> false
 */
export function isPresent<T>(
  array: T[] | null | undefined,
): array is [T, ...T[]] {
  return !isMissing(array) && array.length > 0;
}
