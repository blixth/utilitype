/*
 * Capitalize the given string.
 *
 * @Param {string} text = The text to capitalize.
 *
 * @Example
 *
 *   capitalize('VOLVO')
 *   //=> "Volvo"
 *
 *   capitalize('audi')
 *   //=> "Audi"
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
}
