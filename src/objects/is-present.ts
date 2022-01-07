import { isMissing } from '../any/is-missing';
import { isObject } from './is-object';

/**
 * Determine if the given object is present. The object is considered present
 * if it either has properties, or is an instance with inherited properties.
 *
 * @Param {T} value - The value to check for presence.
 *
 * @Example
 *
 *   isPresent({})
 *   //=> false
 *
 *   isPresent({ foo: 'bar' })
 *   //=> true
 *
 *   isPresent(new Date())
 *   //=> true
 */
export function isPresent<T extends Record<any, any>>(
  value: T | undefined | null,
): value is NonNullable<T> {
  if (isMissing(value)) {
    return false;
  }

  if (isObject(value) && value.constructor === Object) {
    return Object.keys(value).length > 0;
  }

  return Object.getOwnPropertyNames(Object.getPrototypeOf(value)).length > 0;
}
