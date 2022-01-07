import { isObject } from '../../src/objects/is-object';
import { expect } from '../expect-helper';

describe('isObject', () => {
  context('when given NaN', () => {
    it('returns false', () => {
      expect(isObject(NaN)).to.eql(false);
    });
  });

  context('when given an array', () => {
    it('returns false', () => {
      expect(isObject([])).to.eql(false);
    });
  });

  context('when given undefined', () => {
    it('returns false', () => {
      expect(isObject(undefined)).to.eql(false);
    });
  });

  context('when given null', () => {
    it('returns false', () => {
      expect(isObject(null)).to.eql(false);
    });
  });

  context('when given an object', () => {
    it('returns true', () => {
      expect(isObject({})).to.eql(true);
    });
  });

  context('when given a funcion', () => {
    it('returns false', () => {
      expect(isObject(() => null)).to.eql(false);
    });
  });

  context('when given a string', () => {
    it('returns false', () => {
      expect(isObject('')).to.eql(false);
    });
  });
});
