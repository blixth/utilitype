import { isFunction } from './is-function';

/**
 * Determine whether the given function is present.
 *
 * @Param {Function | unknown} func - The supposed function.
 *
 * @Example
 *
 *   isPresent(() => null)
 *   //=> true
 *
 *   isPresent(null)
 *   //=> false
 */
export function isPresent(func: () => unknown | unknown): func is () => unknown {
  return isFunction(func);
}
