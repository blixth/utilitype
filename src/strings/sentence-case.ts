import { capitalize } from './capitalize';
import { tokenize } from './tokenize';

/*
 * Sentence case the given string.
 *
 * @Param {string} text = The text to sentence case.
 *
 * @Example
 *
 *   sentenceCase('CurvedBanana')
 *   //=> "Curved banana"
 */
export function sentenceCase(text: string): string {
  return tokenize(text)
    .map((word, i) => {
      if (i === 0) {
        return capitalize(word);
      }

      return word.toLowerCase();
    })
    .join(' ');
}
