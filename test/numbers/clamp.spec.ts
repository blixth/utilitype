import { clamp } from '../../src/numbers/clamp';
import { expect } from '../expect-helper';

describe('clamp', () => {
  context('when given number within range', () => {
    it('returns that number', () => {
      expect(clamp(1, 2, 3)).to.eql(2);
    });
  });

  context('when given number is larger than max', () => {
    it('returns max', () => {
      expect(clamp(1, 3, 2)).to.eql(2);
    });
  });

  context('when given number is smaller than min', () => {
    it('returns min', () => {
      expect(clamp(1, 0, 3)).to.eql(1);
    });
  });
});
