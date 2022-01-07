import { isMissingOrEmpty } from './is-missing-or-empty';

/*
 * Checks if string is null or only contains white spaces.
 *
 * @Param {string} str = The string to check.
 *
 * @Example
 *
 *   isMissingOrWhiteSpace('')
 *   //=> true
 *
 *   isMissingOrWhiteSpace('   ')
 *   //=> true
 *
 *   isMissingOrWhiteSpace(null)
 *   //=> true
 *
 *   isMissingOrWhiteSpace(undefined)
 *   //=> true
 *
 *   isMissingOrWhiteSpace('banana')
 *   //=> false
 */
export function isMissingOrWhiteSpace(str: string | null | undefined): boolean {
  return isMissingOrEmpty(str) || str.trim().length < 1;
}
