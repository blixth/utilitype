/*
 * Takes the given objects and transforms the values with the provided
 * transformation function.
 *
 * @params {Object} object - The object you want to transform the values of.
 * @params {Function} object - The function that transforms the given key and
 *                             value to a new value.
 *
 * @example
 *
 *     transformValues(
 *       { niceFood: 'Salad', favoriteFood: 'Lasagna' },
 *       (key, value) => 'Pizza'
 *     )
 *     //=> { niceFood: 'Pizza', favoriteFood: 'Pizza' }
 */
export function transformValues<Type>(
  object: Type,
  transform: <Value>(key: keyof Type, value: Value) => Value,
): Type {
  return Object.entries(object).reduce(
    (acc: Record<string, unknown>, [key, value]: any[]) => ({
      ...(acc as Record<string, unknown>),
      [key]: transform(key, value),
    }),
    object,
  ) as Type;
}
