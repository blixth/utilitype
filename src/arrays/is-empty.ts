/**
 * Assert whether the given array is empty. It is considered empty if it has no
 * elements.
 *
 * @Param {array} array = The array of which to assert if it is empty.
 *
 * @Example
 *
 *   isEmpty([])
 *   //=> true
 *
 *   isEmpty([undefined])
 *   //=> false
 *
 *   isEmpty(['pizza'])
 *   //=> false
 */
export function isEmpty<T>(array: T[]): array is [] {
  return array.length < 1;
}
