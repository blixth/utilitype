import { slice } from '../../src/objects/slice';
import { expect } from '../expect-helper';

describe('slice', () => {
  context('when the given keys exist', () => {
    it('slices the given keys', () => {
      const object = { foo: 'foo', bar: 'bar', baz: 'baz' };

      const newObject = slice(object, 'foo', 'bar');

      expect(newObject).to.eql({ foo: 'foo', bar: 'bar' });
    });
  });

  context('when a given key does not exist', () => {
    it('slices the existing keys', () => {
      const object = { foo: 'foo', bar: 'bar' };

      const newObject = slice(object, 'foo', 'baz' as unknown as 'bar');

      expect(newObject).to.eql({ foo: 'foo' });
    });
  });
});
