/**
 * Retrieve whether the given value is present. The keyword true is the only
 * value which is considered present.
 *
 * @Param {boolean} bool - The value to check.
 *
 * @Example
 *
 *   isPresent(true)
 *   //=> true
 *
 *   isPresent(false)
 *   //=> false
 */
export function isPresent(bool?: boolean): bool is true {
  return bool === true;
}
