/**
 * Determine whether the given value is a function.
 *
 * @Param {any} func - The supposed function.
 *
 * @Example
 *
 *   isFunction(() => null)
 *   //=> true
 *
 *   isFunction(null)
 *   //=> false
 */
export function isFunction(func: unknown): func is () => unknown {
  return typeof func === 'function';
}
