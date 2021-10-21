import { capitalize } from './capitalize';
import { tokenize } from './tokenize';

/**
 * Camel case the given string.
 *
 * @Param {string} text = The text to camel case.
 *
 * @Example
 *
 *   camelCase('PizzaSlize')
 *   //=> "pizzaSlize"
 *
 *   camelCase('PIZZA_SLIZE')
 *   //=> "pizzaSlize"
 *
 *   camelCase('kebab-pizza-slize')
 *   //=> "kebabPizzaSlize"
 *
 *   camelCase('pizza_slize')
 *   //=> "pizzaSlize"
 *
 *   camelCase('pizza slize')
 *   //=> "pizzaSlize"
 */
export function camelCase(text: string): string {
  const [first, ...tail] = tokenize(text);

  return [first.toLowerCase(), ...tail.map(capitalize)].join('');
}
