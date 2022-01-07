import { isMissingOrWhiteSpace } from './is-missing-or-white-space';

/*
 * Checks if a string is present.
 *
 * @Param {string} str = The string to check.
 *
 * @Example
 *
 *   isPresent('')
 *   //=> false
 *
 *   isPresent(null)
 *   //=> false
 *
 *   isPresent(undefined)
 *   //=> false
 *
 *   isPresent('banana')
 *   //=> true
 */
export function isPresent(str: string): boolean {
  return !isMissingOrWhiteSpace(str);
}
