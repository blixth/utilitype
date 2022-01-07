/**
 * Determine whether the given objects are deeply equal.
 *
 * @Param {any} objA - The source object to compare.
 * @Param {any} objB - The object to compare against.
 *
 * @Example
 *
 *   isEqual({ a: 'a' }, { a: 'a' })
 *   //=> true
 *
 *   isEqual({ a: 'a' }, { a: 'b' })
 *   //=> false
 */
export function isEqual(objA: unknown, objB: unknown): boolean {
  return JSON.stringify(objA) === JSON.stringify(objB);
}
