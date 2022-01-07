import { isPresent } from '../any/is-present';

/*
 * Obtain the last item in the given array. If item is not found it returns
 * undefined or the given fallback value.
 *
 * @Param {Array}  array = The array to check in.
 * @Param {Object} options = Optional options containing fallback.
 *
 * @Example
 *
 *   last([1, 2, 3])
 *   //=> 3
 *
 *   last([])
 *   //=> undefined
 *
 *   last([], { fallback: -1 })
 *   //=> -1
 */
export function last<T>(
  array: T[],
  options?: undefined
): T | undefined;
export function last<T, FallbackValue>(
  array: T[],
  options: { fallback: FallbackValue }
): T | FallbackValue;
export function last<T, FallbackValue extends any>(
  array: T[],
  options?: { fallback: FallbackValue } | undefined,
): T | FallbackValue {
  const lastItem = array[array.length - 1];

  if (isPresent(options)) {
    return lastItem || options.fallback;
  }

  return lastItem;
}
