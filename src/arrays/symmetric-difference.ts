function isUniqueIn<T extends any[]>(array: T): (value: any) => boolean {
  return (value: any) => array.filter((el) => el === value).length === 1;
}

/**
 * Returns an array of which all elements only exists in one of two arrays.
 * Same as the xor operation.
 *
 * @Param {a} = The first array to use.
 * @Param {b} = The second array to use.
 *
 * @Example
 *
 *    symmetricDifference([1, 2], [2, 3]);
 *    //=> [1, 3]
 *
 *    symmetricDifference([1, 2], [3, 4]);
 *    //=> [1, 2, 3, 4]
 */
export function symmetricDifference<T>(a: T[], b: T[]): Partial<T>[] {
  const concatinated = a.concat(b);

  return concatinated.filter(isUniqueIn(concatinated));
}
