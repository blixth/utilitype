import { isArray } from '../arrays/is-array';

/**
 * Determine if the given value is an object. Arrays are not considered objects.
 *
 * @Param {any} value - The value to check if it's an object.
 *
 * @Example
 *
 *   isObject({})
 *   //=> true
 *
 *   isObject([])
 *   //=> false
 *
 *   isObject(null)
 *   //=> false
 */
export function isObject<T extends any>(value: T): value is Record<any, any> {
  if (isArray(value)) {
    return false;
  }

  if (value === null) {
    return false;
  }

  return typeof value === 'object';
}
