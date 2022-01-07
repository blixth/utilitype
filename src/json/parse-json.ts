/**
 * Parse the given JSON and return the result if successful, otherwise undefined.
 *
 * @Param {string} json = The JSON string to parse.
 *
 * @Example
 *
 *   parseJson('{}')
 *   //=> {}
 *
 *   parseJson('{')
 *   //=> undefined
 */
export function parseJson<T = unknown>(json: string): T | undefined {
  try {
    return JSON.parse(json);
  } catch {
    return undefined;
  }
}
