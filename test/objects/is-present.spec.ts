import { isPresent } from '../../src/objects/is-present';
import { expect } from '../expect-helper';

describe('isPresent', () => {
  context('when given null', () => {
    it('returns false', () => {
      expect(isPresent(null)).to.eql(false);
    });
  });

  context('when given an object with no keys', () => {
    it('returns false', () => {
      expect(isPresent({})).to.eql(false);
    });
  });

  context('when given an object with keys', () => {
    it('returns true', () => {
      expect(isPresent({ foo: 'bar' })).to.eql(true);
    });
  });

  context('when given a date', () => {
    it('returns true', () => {
      expect(isPresent(new Date())).to.eql(true);
    });
  });

  context('when given an instance of a class with methods', () => {
    it('returns true', () => {
      const Foo = class {
        private bar: string | undefined;

        foo() {
          return this.bar;
        }
      };

      expect(isPresent(new Foo())).to.eql(true);
    });
  });
});
