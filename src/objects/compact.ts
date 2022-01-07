import { isMissing } from '../any/is-missing';

/*
 * Return the same object excluding keys without values.
 *
 * @Param {Object} object = An object.
 *
 * @Example
 *
 *     compact({ pizza: 'Mmm', banana: undefined, salad: null })
 *     //=> { pizza: 'Mmm' }
 */
export function compact(object: any): any {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (isMissing(value)) return { ...acc };

    return { ...acc, [key]: value };
  }, {});
}
