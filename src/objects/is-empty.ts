/*
 * Assert whether the given object is empty. It is considered empty if it has no
 * keys.
 *
 * @Param {object} obj = The object of which to assert if it is empty.
 *
 * @Example
 *
 *     isEmpty({})
 *     //=> true
 *
 *     isEmpty({ food: 'pizza' })
 *     //=> false
 *
 *     isEmpty({ food: undefined })
 *     //=> false
 */
export function isEmpty(obj: Record<string, unknown>): boolean {
  return Object.keys(obj).length < 1;
}
