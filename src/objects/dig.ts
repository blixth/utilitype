import { isMissing } from '../any/is-missing';

/*
 * Recursively digs in the given object with the given keys.
 *
 * @Param {Object} object    = The object to dig in.
 * @Param (...String) keys   = The keys to dig with.
 *
 * @Example
 *
 *   const dishes = { dishes: { good: { italian: 'Pizza' } } };
 *   dig(dishes, 'dishes', 'good', 'italian')
 *   //=> 'Pizza'
 */
export function dig<FallbackValue = undefined>(
  object: any,
  ...keys: string[]
): any | FallbackValue {
  return keys.reduce((acc, key) => {
    if (isMissing(acc)) {
      return acc;
    }

    const value = acc[key];

    return value;
  }, object);
}
