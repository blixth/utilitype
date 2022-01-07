import { isPresent } from './is-present';

/**
 * Returns the given value if present, otherwise undefined.
 *
 * @Param {string | any | any[]} value = The value to test presence on.
 *
 * @Example
 *   presence({})
 *   //=> undefined
 *
 *   presence({ fruit: 'banana' })
 *   //=> { fruit: 'banana' }
 *
 *   presence([])
 *   //=> undefined
 *
 *   presence(['banana'])
 *   //=> ['banana']
 *
 *   presence('')
 *   //=> undefined
 *
 *   presence('banana')
 *   //=> 'banana'
 *
 *   presence(1)
 *   //=> 1
 *
 *   presence(NaN)
 *   //=> undefined
 *
 *   presence(true)
 *   //=> true
 *
 *   presence(false)
 *   //=> undefined
 */
export function presence<T>(value: T): T | undefined {
  if (isPresent(value)) {
    return value;
  }

  return undefined;
}
