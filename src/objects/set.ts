function parsePath(path: string | string[]) {
  if (Array.isArray(path)) return path;

  return path.split('.');
}

/*
 * Set the property at the given path without mutating the given object.
 *
 * @Param {object} obj             = The object to set a property on.
 * @Param {string | string[]} path = The path string or array to set the value
 *                                   at.
 * @Param {any} value              = The value to set.
 *
 * @Example
 *
 *     set({ food: 'salad' }, 'food', 'pizza')
 *     //=> { food: 'pizza' }
 *
 *     set({}, 'food', 'pizza')
 *     //=> { food: 'pizza' }
 *
 *     set({}, ['food', 'favorite'], 'pizza')
 *     //=> { food: { favorite: 'pizza' } }
 *
 *     set({}, 'food.favorite', 'pizza')
 *     //=> { food: { favorite: 'pizza' } }
 */
export function set<T extends any>(
  obj: T,
  path: string | string[],
  value: any,
): T {
  const [key, ...additionalKeys] = parsePath(path);

  if (additionalKeys.length > 0) {
    const nextNode = { ...set((obj as any)[key], additionalKeys, value) };

    return { ...(obj as any), [key]: nextNode } as T;
  }

  return { ...(obj as any), [key]: value } as T;
}
