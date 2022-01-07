import { isEmpty as isObjectEmpty } from '../objects/is-empty';
import { isArray } from '../arrays/is-array';
import { isEmpty as isArrayEmpty } from '../arrays/is-empty';

/**
 * Assert whether the given object or array is empty.
 *
 * @Param {object | array} enumerable - The enumerable to assert on.
 *
 * @Example
 *
 *   isEmpty({})
 *   //=> true
 *
 *   isEmpty({ food: 'pizza' })
 *   //=> false
 *
 *   isEmpty([])
 *   //=> true
 *
 *   isEmpty(['pizza'])
 *   //=> false
 */
export function isEmpty<T>(enumerable: Record<string, unknown> | T[]): boolean {
  if (isArray(enumerable)) {
    return isArrayEmpty(enumerable);
  }

  return isObjectEmpty(enumerable);
}
