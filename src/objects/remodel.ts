import { isString } from '../strings/is-string';

function isProperty<From>(
  key: keyof From | GetterFunc<From>,
): key is keyof From {
  return isString(key);
}

export function getValue<From, Transform extends ITransform<From>>(
  obj: From,
  key: string,
  transform: Transform,
): unknown {
  if (isProperty(transform.from)) return obj[transform.from];

  try {
    return transform.from(obj);
  } catch ({ message }) {
    throw new Error(`Transform of property '${key}' threw error: ${message}`);
  }
}

/*
 * Remodel the given object to a new schema.
 *
 * @Param {Object} obj              = The object to remodel.
 * @Param {ITransformSchema} schema = The schema to base the remodel on.
 *
 * @Example
 *   remodel({ food: 'Pineapple Pizza' }, { trash: { from: 'food' } })
 *   //=> { trash: 'Pineapple Pizza' }
 *
 *   remodel({ calories: 5000 }, { kiloCalories: o => o.calories / 1000 })
 *   //=> { kiloCalories: 5 }
 */
export function remodel<From, Schema extends ITransformSchema<From>>(
  obj: From,
  schema: Schema,
): RemodelReturnType<From, Schema> {
  // eslint-disable-next-line max-len
  return Object.entries(schema).reduce((result, [key, transform]) => ({ ...(result as Record<string, unknown>), [key]: getValue(obj, key, transform) }), {} as any);
}

interface ITransformSchema<From> {
  [key: string]: ITransform<From>;
}

interface ITransform<From> {
  from: keyof From | GetterFunc<From>;
}

type GetterFunc<From, To = any> = (obj: From) => To;

type RemodelReturnType<From, Schema extends ITransformSchema<From>> = {
  [key in keyof Schema]: Schema[key]['from'] extends keyof From
    ? From[Schema[key]['from']]
    : Schema[key]['from'] extends GetterFunc<From>
      ? ReturnType<Schema[key]['from']>
      : never;
};
