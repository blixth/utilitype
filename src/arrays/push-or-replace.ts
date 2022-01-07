/**
 * Replace item in array if it exists based on the given identification,
 * otherwise add it to the array. Does not modify the original array.
 *
 * If identification function is omitted, it identifies the item by strict
 * comparison.
 *
 * @Example
 *
 *   pushOrReplace([1, 5, 3], 2, (n) => n === 5)
 *   //=> [1, 2, 3]
 *
 *   pushOrReplace([1, 2], 3)
 *  //=> [1, 2, 3]
 */
export function pushOrReplace<T>(
  array: T[],
  item: T,
  identifyBy: (item: T) => boolean = (x) => x === item,
): T[] {
  if (array.find((x) => identifyBy(x))) {
    return array.map((x) => {
      if (identifyBy(x)) {
        return item;
      }

      return x;
    });
  }

  return [...array, item];
}
