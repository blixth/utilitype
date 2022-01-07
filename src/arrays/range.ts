/**
 * Given a min and max value, retrieve an array with the numbers from min to max
 * (inclusive).
 *
 * @Param {number} min = The smallest number to include.
 * @Param {number} max = The biggest number to include.
 *
 * @Example
 *
 *   range(1, 3)
 *   //=> [1, 2, 3]
 */
export function range(min: number, max: number): number[] {
  if (max < min) {
    return [];
  }

  return Array(max - min + 1)
    .fill(0)
    .map((_, i) => min + i);
}
