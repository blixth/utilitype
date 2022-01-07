/*
 * Given a function with callback pattern, call that function and return a
 * promise instead.
 *
 * @Param {Function} func = The function to call.
 *
 *   function eatCapricciosa(callback) {
 *     callback(undefined, 'Yum!');
 *   }
 *
 *   promisify(eatCapricciosa);
 *   //=> Promise {<resolved>: 'Yum!'}
 *
 *   function eatHawaii(callback) {
 *     callback('No way sir!', undefined);
 *   }
 *
 *   promisify(eatHawaii);
 *   //=> Promise {<rejected>: 'No way sir!'}
 */
export function promisify<T>(
  func: (callback: (error: any, result?: T) => any) => any,
): Promise<T> {
  return new Promise((resolve, reject) => {
    func((error, result) => {
      if (error) {
        return reject(error);
      }

      return resolve(result);
    });
  });
}
