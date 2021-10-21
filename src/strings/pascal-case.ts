import { capitalize } from './capitalize';
import { tokenize } from './tokenize';

/*
 * Pascal case the given string.
 *
 * @Param {string} text = The text to pascal case.
 *
 * @Example
 *
 *   pascalCase('General Kenobi')
 *   //=> "GeneralKenobi"
 */
export function pascalCase(text: string): string {
  return tokenize(text).map(capitalize).join('');
}
