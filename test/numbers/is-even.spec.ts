import { isEven } from '../../src/numbers/is-even';
import { expect } from '../expect-helper';

describe('isEven', () => {
  context('when giving a positive even number', () => {
    it('returns true', () => {
      expect(isEven(2)).to.eql(true);
    });
  });

  context('when giving a positive odd number', () => {
    it('returns false', () => {
      expect(isEven(1)).to.eql(false);
    });
  });

  context('when given zero', () => {
    it('returns true', () => {
      expect(isEven(0)).to.eql(true);
    });
  });

  context('when given a negative even number', () => {
    it('returns true', () => {
      expect(isEven(-2)).to.eql(true);
    });
  });

  context('when given a negative odd number', () => {
    it('returns false', () => {
      expect(isEven(-2)).to.eql(true);
    });
  });
});
