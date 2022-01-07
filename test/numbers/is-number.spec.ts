import { isNumber } from '../../src/numbers/is-number';
import { expect } from '../expect-helper';

describe('isNumber', () => {
  context('when given a negative number', () => {
    it('returns true', () => {
      expect(isNumber(-1)).to.eql(true);
    });
  });

  context('when given null', () => {
    it('returns false', () => {
      expect(isNumber(null)).to.eql(false);
    });
  });

  context('when given an infinity', () => {
    it('returns true', () => {
      expect(isNumber(Infinity)).to.eql(true);
    });
  });

  context('when given 0', () => {
    it('returns true', () => {
      expect(isNumber(0)).to.eql(true);
    });
  });

  context('when given negative infinity', () => {
    it('returns true', () => {
      expect(isNumber(-Infinity)).to.eql(true);
    });
  });

  context('when given NaN', () => {
    it('returns false', () => {
      expect(isNumber(NaN)).to.eql(false);
    });
  });

  context('when given an empty object', () => {
    it('returns false', () => {
      expect(isNumber({})).to.eql(false);
    });
  });

  context('when given a string', () => {
    it('returns false', () => {
      expect(isNumber('1')).to.eql(false);
    });
  });
});
