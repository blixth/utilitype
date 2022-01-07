import { percent } from '../../src/units/percent/percent';
import { expect } from '../expect-helper';

describe('percent', () => {
  context('when given 0.1', () => {
    it('returns 10', () => {
      expect(percent(0.1, 0)).to.eql(10);
    });
  });

  context('when given 0.125 and 1 decimal', () => {
    it('returns 12.5', () => {
      expect(percent(0.125, 1)).to.eql(12.5);
    });
  });

  context('when given 1', () => {
    it('returns 100', () => {
      expect(percent(1, 2)).to.eql(100.00);
    });
  });
});
