import { isPresent } from '../any';

/*
 * Return the same array excluding falsey values.
 *
 * @Param {Array} array = An array.
 *
 * @Example
 *
 *     compact(['Pizza', 'Pineapple', null, '', undefined])
 *     //=> ['Pizza', 'Pineapple']
 */
export function compact<T>(array: T[]): NonNullable<T>[] {
  return array.filter<NonNullable<T>>(isPresent);
}
