import { tokenize } from './tokenize';

/**
 * Kebab case the given string.
 *
 * @Param {string} text = The text to kebab case.
 *
 * @Example
 *
 *   kebabCase('SCREAM_CASE')
 *   //=> 'scream-case'
 *
 *   kebabCase('camelCase')
 *   //=> 'camel-case'
 *
 *   kebabCase('snake_case')
 *   //=> 'snake-case'
 */
export function kebabCase(text: string): string {
  return tokenize(text)
    .map((token) => token.toLowerCase())
    .join('-');
}
