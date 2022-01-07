/*
 * Checks if a value is an array
 *
 * @Example
 *
 *   isArray([])
 *   //=> true
 *
 *   isArray(null)
 *   //=> false
 *
 *   isArray(undefined)
 *   //=> false
 */
export function isArray<T>(value: T[] | unknown): value is T[] {
  return Array.isArray(value);
}
