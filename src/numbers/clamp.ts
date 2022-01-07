/*
 * Return the given number if in range, otherwise return the nearest value in
 * range.
 *
 * @Example
 *    clamp(1, 2, 3)
 *    //=> 2
 *
 *    clamp(1, 3, 2)
 *    //=> 2
 *
 *    clamp(2, 1, 3)
 *    //=> 2
 */
export function clamp(min: number, given: number, max: number): number {
  if (given > max) {
    return max;
  }

  if (given < min) {
    return min;
  }

  return given;
}
