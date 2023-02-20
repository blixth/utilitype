/**
 * Tokenizes the given string.
 *
 * @Param {string} text = The text to tokenize.
 *
 * @Example
 *
 *   tokenize('VolvoV40')
 *   //=> ['Volvo', 'V40']
 *
 *   tokenize('HYUNDAI_IONIQ')
 *   //=> ['HYUNDAI', 'IONIQ']
 *
 *   tokenize('tesla-model-s')
 *   //=> ['tesla', 'model', 's']
 *
 *   tokenize('SAAB_900')
 *   //=> ['SAAB', '900']
 *
 *   tokenize('Polestar 2')
 *   //=> ['Polestar', '2']
 */
export function tokenize(input: string): string[] {
  return input.match(/[a-z0-9]+|([A-Z][a-z0-9]+)|([A-Z0-9]+)/g) || [input];
}
