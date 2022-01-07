import { symmetricDifference } from '../../src/arrays/symmetric-difference';
import { expect } from '../expect-helper';

describe('symmetricDifference', () => {
  context('when both sets are unique', () => {
    it('returns the concatinated arrays', () => {
      const a = [1, 2];
      const b = [3, 4];

      const diff = symmetricDifference(a, b);

      expect(diff).to.eql([1, 2, 3, 4]);
    });
  });

  context('when sets contain same value', () => {
    it('concatinates the arrays without that value', () => {
      const a = [1, 2];
      const b = [2, 3];

      const diff = symmetricDifference(a, b);

      expect(diff).to.eql([1, 3]);
    });

    it('concatinates the arrays without that value when second set is smaller', () => {
      const a = [1, 2];
      const b = [2];

      const diff = symmetricDifference(a, b);

      expect(diff).to.eql([1]);
    });

    it('concatinates the arrays without that value when first set is smaller', () => {
      const a = [1];
      const b = [1, 2];

      const diff = symmetricDifference(a, b);

      expect(diff).to.eql([2]);
    });
  });
});
