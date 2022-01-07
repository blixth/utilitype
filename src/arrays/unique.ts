/*
 * Return array with duplicate values stripped out. By default it compares
 * using object identity.
 *
 * @Param {Array}    array        = The array to filter.
 * @Param {Function} isEquivalent = The comparison to use. By default compares
 *                                  object identity.
 *
 * @Example
 *   unique([1, 2, 2, 3])
 *   //=> [1, 2, 3]
 *
 *   unique([{ food: 'pizza' }, { food: 'pizza' }])
 *   //=> [{ food: 'pizza' }, { food: 'pizza' }]
 *
 *   unique(
 *     [{ food: 'pizza' }, { food: 'pizza' }],
 *     (a, b) => JSON.stringify(a) === JSON.stringify(b)
 *   )
 *   //=> [{ food: 'pizza' }]
 */
export function unique<T>(
  array: T[],
  isEquivalent: (itemOne: T, itemTwo: T) => boolean = (itemOne, itemTwo) => itemOne === itemTwo,
): T[] {
  const isEquivalentTo = (item: T) => (itemTwo: T) => isEquivalent(item, itemTwo);

  return array.reduce((acc, item, i) => {
    const otherItems = acc.slice();
    otherItems.splice(i, 1);

    if (otherItems.some(isEquivalentTo(item))) {
      return acc;
    }

    return [...acc, item];
  }, [] as T[]);
}
