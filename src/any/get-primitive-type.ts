import { PrimitiveType } from './primitive-type';
import { isString } from '../strings/is-string';
import { isFunction } from '../functions/is-function';
import { isNumber } from '../numbers/is-number';
import { isArray } from '../arrays/is-array';
import { isObject } from '../objects/is-object';
import { isBoolean } from '../booleans/is-boolean';
import { isMissing } from './is-missing';

const TYPE_DETERMINER_MAP: {
  [key in PrimitiveType]: (value: any) => boolean;
} = {
  [PrimitiveType.String]: isString,
  [PrimitiveType.Function]: isFunction,
  [PrimitiveType.Object]: isObject,
  [PrimitiveType.Array]: isArray,
  [PrimitiveType.Boolean]: isBoolean,
  [PrimitiveType.Nullable]: isMissing,
  [PrimitiveType.Number]: isNumber,
};

/**
 * Retrieve the primitive type of the given value. It is opiniated and differs
 * from typeof. See examples for details.
 *
 * @Param {any} value - The value to check primitive type of.
 *
 * @Example
 *
 *   getPrimitiveType(null)
 *   //=> "nullable"
 *
 *   getPrimitiveType(undefined)
 *   //=> "nullable"
 *
 *   getPrimitiveType(NaN)
 *   //=> "nullable"
 *
 *   getPrimitiveType(new Date())
 *   //=> "object"
 */
export function getPrimitiveType<T>(value: T): PrimitiveType {
  const [type] = Object.entries(TYPE_DETERMINER_MAP).find(([, isType]) => isType(value))
   || [PrimitiveType.Nullable];

  return type as PrimitiveType;
}
