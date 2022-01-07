import { isMissing } from '../any/is-missing';

/*
 * Checks if string is null or empty.
 *
 * @Param {string} str = The string to check.
 *
 * @Example
 *
 *   isMissingOrEmpty('')
 *   //=> true
 *
 *   isMissingOrEmpty(null)
 *   //=> true
 *
 *   isMissingOrEmpty(undefined)
 *   //=> true
 *
 *   isMissingOrEmpty('banana')
 *   //=> false
 */
export function isMissingOrEmpty(str: string | null | undefined): str is null | undefined {
  return isMissing(str) || str.length < 1;
}
