/*
 * Checks if value is a string.
 *
 * @Param {any} str = The value to check.
 *
 * @Example
 *
 *   isString('')
 *   //=> true
 *
 *   isString(null)
 *   //=> false
 *
 *   isString(undefined)
 *   //=> false
 *
 *   isString({})
 *   //=> false
 *
 *   isString([])
 *   //=> false
 */
export function isString(value: any): value is string {
  return typeof value === 'string' || value instanceof String;
}
