import { isMissing } from '../any';

/*
 * Pass each value in array to async callback function and reduce to one value.
 * Async version of Array.prototype.reduce.
 *
 *
 * @Param {Array} array       = The items to reduce.
 * @Param {Function} callback = The callback to use when reducing.
 * @Param {any}               = The default value to use.
 *
 * @Example
 *   reducePromises([1, 2, 3], async (acc, num) => {
 *     return acc + num
 *   }, 0)
 *   //=> 6
 */
export function reducePromises<T>(
  array: T[],
  callback: CallbackFunction<T>,
  defaultValue?: T | undefined,
): Promise<T> {
  if (isMissing(defaultValue)) {
    const [firstItem, ...tail] = array;

    return reducePromises(tail, callback, firstItem);
  }

  // eslint-disable-next-line max-len
  return array.reduce(async (acc, ...args) => acc.then((resolvedAcc) => callback(resolvedAcc, ...args)), Promise.resolve(defaultValue));
}

type CallbackFunction<T> = (
  previousValue: T,
  currentValue: T,
  currentIndex: number,
  array: T[]
) => T | Promise<T>;
