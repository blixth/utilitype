import { capitalize } from './capitalize';
import { tokenize } from './tokenize';

/*
 * Title case the given string.
 *
 * @Param {string} text = The text to title case.
 *
 * @Example
 *
 *   titleCase('her royal highness')
 *   //=> "Her Royal Highness"
 */
export function titleCase(text: string): string {
  return tokenize(text).map(capitalize).join(' ');
}
