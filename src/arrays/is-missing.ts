/*
 * Checks if an array is missing
 *
 * @Example
 *
 *   isMissing([1, 2, 3])
 *   //=> false
 *
 *   isMissing([])
 *   //=> true
 *
 *   isMissing(null)
 *   //=> true
 *
 *   isMissing(undefined)
 *   //=> true
 */
export function isMissing<T>(array: T[] | null | undefined): array is T[] {
  return array === null || array === undefined || array.length === 0;
}
