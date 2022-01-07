/**
 * Retrieve the first element in the given array.
 *
 * @Param {Array} array = The array to check in.
 *
 * @Example
 *
 *   first([1, 2, 3])
 *   //=> 1
 *
 *   first([])
 *   //=> undefined
 */
export function first<T>(array: [T, ...T[]]): T;
export function first(array: []): undefined;
export function first<T>(array: [T, ...T[]] | []): T | undefined {
  return array[0];
}
