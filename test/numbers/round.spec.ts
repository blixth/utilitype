import { round } from '../../src/numbers/round';
import { expect } from '../expect-helper';

describe('round', () => {
  context('when given value of 100.1337 and 0 decimals', () => {
    it('returns 100', () => {
      expect(round(100.1337, 0)).to.eql(100);
    });
  });

  context('when given value of 100.1337 and 1 decimals', () => {
    it('returns 100.1', () => {
      expect(round(100.1337, 1)).to.eql(100.1);
    });
  });

  context('when given value of 100.1337 and 2 decimals', () => {
    it('returns 100.13', () => {
      expect(round(100.1337, 2)).to.eql(100.13);
    });
  });

  context('when given value of 0.49 and 0 decimals', () => {
    it('returns 0', () => {
      expect(round(0.49, 0)).to.eql(0);
    });
  });

  context('when given value of 0.5 and 0 decimals', () => {
    it('returns 1', () => {
      expect(round(0.5, 0)).to.eql(1);
    });
  });

  context('when given value of 0.51 and 2 decimals', () => {
    it('returns 0.51', () => {
      expect(round(0.51, 2)).to.eql(0.51);
    });
  });

  context('when given value of 1.005 and 2 decimals', () => {
    it('returns 1.01', () => {
      expect(round(1.005, 2)).to.eql(1.01);
    });
  });
});
