/**
 * Chunk the given array into pieces of given size.
 *
 * @Param {Array} array = The array to slice.
 * @Param {Number} size = The size of the chunks.
 *
 * Example:
 *   chunk(['Pizza', 'Pineapple', 'Apple', 'Pasta'], 2)
 *   //=> [['Pizza', 'Pineapple'], ['Apple', 'Pasta']]
 */
export function chunk<T>(array: T[], size: number): T[][] {
  return array.reduce(
    ([chunks, takeFrom]: [T[][], T[]]): [T[][], T[]] => {
      if (takeFrom.length === 0) {
        return [chunks, takeFrom];
      }

      return [[...chunks, takeFrom.slice(0, size)], takeFrom.slice(size)];
    },
    [[], array],
  )[0];
}
