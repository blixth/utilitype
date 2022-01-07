/**
 * Retrieve whether the given value is a boolean or not.
 *
 * @Param {unknown} bool - The supposed boolean to check.
 *
 * @Example
 *
 *   isBoolean(true)
 *   //=> true
 *
 *   isBoolean(null)
 *   //=> false
 */
export function isBoolean(bool: unknown): bool is boolean {
  return bool === false || bool === true;
}
