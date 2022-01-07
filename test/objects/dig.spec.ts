import { dig } from '../../src/objects/dig';
import { expect } from '../expect-helper';

describe('dig', () => {
  context('when accessing one level', () => {
    it('returns the value if present', () => {
      const object = { foo: 'bar' };

      const value = dig(object, 'foo');

      expect(value).to.eql('bar');
    });

    it('returns undefined if not present', () => {
      const object = {};

      const value = dig(object, 'foo');

      expect(value).to.eql(undefined);
    });
  });

  context('when accessing two levels', () => {
    it('returns the value if present', () => {
      const object = { foo: { bar: 'baz' } };

      const value = dig(object, 'foo', 'bar');

      expect(value).to.eql('baz');
    });

    it('returns undefined if value is not present', () => {
      const object = {};

      const value = dig(object, 'foo', 'bar');

      expect(value).to.eql(undefined);
    });
  });
});
