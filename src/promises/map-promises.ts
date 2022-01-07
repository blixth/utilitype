/*
 * Maps array of promises that returns a Promise that is resolved
 * with an array of results when all of the provided Promises resolve,
 * or rejected when any Promise is rejected.
 *
 * @Param {Array} array       = The items to map over.
 * @Param {Function} callback = The callback to use when mapping.
 *
 */
export const mapPromises = async <From, To>(
  array: From[],
  callback: (item: From) => Promise<To>,
): Promise<To[]> => Promise.all(array.map(callback));
