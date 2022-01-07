import { wrap } from '../../src/arrays/wrap';
import { expect } from '../expect-helper';

describe('wrap', () => {
  context('when given an array', () => {
    it('returns that array', () => {
      expect(wrap([1, 2, 3])).to.eql([1, 2, 3]);
    });
  });

  context('when given an array item', () => {
    it('wraps that item', () => {
      expect(wrap(1)).to.eql([1]);
    });
  });
});
