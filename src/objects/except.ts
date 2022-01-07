/*
 * Clone object without given keys.
 *
 * @Param {Object} object = Object to clone.
 * @Param {...String}     = Subset of keys in object to remove.
 *
 * @Example
 *
 *   except({ snack: 'banana', dish: 'pizza' }, 'snack')
 *   //=> { dish: 'pizza' }
 */
export function except<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
  return keys.reduce((newObj, key) => {
    const { [key]: value, ...rest } = newObj;

    return rest;
  }, obj as any);
}
