import { range } from '../../src/arrays/range';
import { expect } from '../expect-helper';

describe('range', () => {
  it('returns the numbers from min to max', () => {
    expect(range(1, 3)).to.eql([1, 2, 3]);
  });

  context('when given negative numbers', () => {
    it('returns the numbers from min to max', () => {
      expect(range(-3, -1)).to.eql([-3, -2, -1]);
    });
  });

  context('when given a reverse range', () => {
    it('returns an empty array', () => {
      expect(range(-1, -3)).to.eql([]);
    });
  });

  context('when min equals max', () => {
    it('returns an array with that value', () => {
      expect(range(0, 0)).to.eql([0]);
    });
  });
});
