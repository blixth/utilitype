import { compact as arrayCompact } from '../arrays/compact';
import { compact as objectCompact } from '../objects/compact';

/*
 * Return the enumerable excluding falsey values.
 *
 * @Param {array | object} obj = The object or array to return.
 *
 * @Example
 *
 * compact(['Pizza', 'Pineapple', null, '', undefined])
 * //=> ['Pizza', 'Pineapple']
 *
 * compact({ pizza: 'Mmm', banana: undefined, salad: null })
 * //=> { pizza: 'Mmm' }
 *
 */
export function compact(obj: unknown[] | unknown): unknown {
  if (Array.isArray(obj)) return arrayCompact(obj);

  return objectCompact(obj);
}
