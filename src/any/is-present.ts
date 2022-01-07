import { isPresent as arrayIsPresent } from '../arrays/is-present';
import { isPresent as numberIsPresent } from '../numbers/is-present';
import { isPresent as objectIsPresent } from '../objects/is-present';
import { isPresent as stringIsPresent } from '../strings/is-present';
import { isPresent as booleanIsPresent } from '../booleans/is-present';
import { isPresent as functionIsPresent } from '../functions/is-present';
import { PrimitiveType } from './primitive-type';
import { getPrimitiveType } from './get-primitive-type';

const TYPE_PRESENCE_PREDICATE_MAP: {
  [key in PrimitiveType]: (value: any) => boolean;
} = {
  [PrimitiveType.String]: stringIsPresent,
  [PrimitiveType.Function]: functionIsPresent,
  [PrimitiveType.Object]: objectIsPresent,
  [PrimitiveType.Array]: arrayIsPresent,
  [PrimitiveType.Boolean]: booleanIsPresent,
  [PrimitiveType.Nullable]: () => false,
  [PrimitiveType.Number]: numberIsPresent,
};

/**
 * Asserts whether the given value is present or not. The definition of present
 * is opiniated. See examples for more information.
 *
 * @Param {any} value - The value to assert whether it is present.
 *
 * @Example
 *
 *   isPresent({})
 *   //=> false
 *
 *   isPresent({ food: 'pizza' })
 *   //=> true
 *
 *   isPresent([])
 *   //=> false
 *
 *   isPresent(['pizza'])
 *   //=> true
 *
 *   isPresent(false)
 *   //=> false
 *
 *   isPresent(true)
 *   //=> true
 *
 *   isPresent("\t\n ")
 *   //=> false
 *
 *   isPresent("pizza")
 *   //=> true
 *
 *   isPresent(0)
 *   //=> true
 *
 *   isPresent(NaN)
 *   //=> false
 */
export function isPresent<T>(value: T): value is NonNullable<T> {
  const type = getPrimitiveType(value);

  return TYPE_PRESENCE_PREDICATE_MAP[type](value);
}
