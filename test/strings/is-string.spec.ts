import { isString } from '../../src/strings/is-string';
import { expect } from '../expect-helper';

describe('isString', () => {
  context('when given a string', () => {
    it('should return true', () => {
      expect(isString('banana')).to.eql(true);
    });
  });

  context('when given an object', () => {
    it('should return false', () => {
      expect(isString({})).to.eql(false);
    });
  });

  context('when given an array', () => {
    it('should return false', () => {
      expect(isString([])).to.eql(false);
    });
  });

  context('when given an integer', () => {
    it('should return false', () => {
      expect(isString(1)).to.eql(false);
    });
  });

  context('when given a boolean', () => {
    it('should return false', () => {
      expect(isString(true)).to.eql(false);
    });
  });

  context('when given null', () => {
    it('should return false', () => {
      expect(isString(null)).to.eql(false);
    });
  });

  context('when given undefined', () => {
    it('should return false', () => {
      expect(isString(undefined)).to.eql(false);
    });
  });

  context('when given a date', () => {
    it('should return false', () => {
      expect(isString(new Date())).to.eql(false);
    });
  });
});
