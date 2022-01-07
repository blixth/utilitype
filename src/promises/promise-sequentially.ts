/*
 * Map to promises and resolve sequentially.
 *
 * @Param {Array} array       = The items to map over.
 * @Param {Function} callback = The callback to use when mapping.
 *
 */
export async function promiseSequentially<T>(
  array: T[],
  callback: (item: T, index: number) => Promise<any>,
): Promise<void> {
  // eslint-disable-next-line max-len
  return array.reduce(async (promise, item, i) => promise.then(async () => callback(item, i)), Promise.resolve());
}
