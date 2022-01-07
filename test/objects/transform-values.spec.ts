import { transformValues } from '../../src/objects/transform-values';
import { expect } from '../expect-helper';

describe('transformValues', () => {
  it('transforms values with the given callback function', () => {
    const object = { foo: 'bar', bar: 'bar' };
    const toUpperCase = (value: any) => value.toUpperCase();

    const newObject = transformValues(object, toUpperCase);

    expect(newObject).to.eql({ foo: 'FOO', bar: 'BAR' });
  });
});
