/*
 * Given a predicate return an array containing two arrays.
 * The first array contains values passing the predicate. The second array
 * contains values not passing the predicate.
 *
 * @Example
 *
 *   const array = [1, 2, 3, 4];
 *   const isEven = (num) => num % 2 === 0;
 *   partition(array, isEven);
 *   //=> [[2, 4], [1, 3]]
 */
export function partition<T>(
  array: T[],
  predicate: (subject: T) => boolean,
): [T[], T[]] {
  return array.reduce(
    ([matching, notMatching], item) => {
      if (predicate(item)) {
        return [[...matching, item], notMatching];
      }

      return [matching, [...notMatching, item]];
    },
    [[], []] as any,
  );
}
