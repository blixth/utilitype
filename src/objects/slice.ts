import { compact } from './compact';

/*
 * Slice object to include only the given keys.
 *
 * @Param {Object} object = Object to slice.
 * @Param {...String}     = Subset of keys in object to slice.
 *
 * @Example
 *
 *    slice({ pizza: 'Mm', pasta: 'Ah', spinach: 'Ew' }, 'pizza', 'pasta');
 *    //=> { pizza: 'Mm', pasta: 'Ah' }
 */
export function slice<T, K extends keyof T>(
  object: T,
  ...keys: K[]
): Pick<T, K> {
  const newObject = keys.reduce((acc, key) => ({ ...acc, [key]: object[key] }), {} as any);

  return compact(newObject);
}
