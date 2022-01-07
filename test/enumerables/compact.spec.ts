import { compact } from '../../src/enumerables';
import { expect } from '../expect-helper';

describe('presence', () => {
  context('when parameter is an object', () => {
    context('when object only contain truthy values', () => {
      it('returns an identical object', () => {
        const object = { foo: 'bar' };

        const result = compact(object);

        expect(result).to.eql({ foo: 'bar' });
      });
    });

    context('when object contains undefined values', () => {
      it('returns a object without those keys', () => {
        const object = { foo: 'bar', baz: undefined };

        const result = compact(object);

        expect(result).to.eql({ foo: 'bar' });
      });
    });

    context('when object contains null values', () => {
      it('returns a object without those keys', () => {
        const object = { foo: 'bar', baz: null };

        const result = compact(object);

        expect(result).to.eql({ foo: 'bar' });
      });
    });
  });

  context('when parameter is an array', () => {
    context('when array contains null, undefined or empty strings', () => {
      it('should remove', () => {
        const arr = ['Pizza', 'Pineapple', null, undefined];

        const result = compact(arr);

        expect(result).to.eql(['Pizza', 'Pineapple']);
      });
    });
  });
});
