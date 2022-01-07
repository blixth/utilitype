import { pushOrReplace } from '../../src/arrays/push-or-replace';
import { expect } from '../expect-helper';

describe('pushOrReplace', () => {
  context('when given no identification', () => {
    it('returns an array with the added item if it is not existing', () => {
      expect(pushOrReplace([1, 2], 3)).to.eql([1, 2, 3]);
    });

    it('returns an array with the replaced item if it is existing', () => {
      expect(pushOrReplace([1, 2], 2)).to.eql([1, 2]);
    });

    it('maintains the order of the array', () => {
      expect(pushOrReplace([2, 1], 2)).to.eql([2, 1]);
    });
  });

  context('when given a custom identification', () => {
    it('returns an array with the added item if it is not matched', () => {
      expect(pushOrReplace([1, 2], 2, () => false)).to.eql([1, 2, 2]);
    });

    it('returns an array with the replaced item if it is existing', () => {
      expect(
        pushOrReplace([{ id: 1, name: 'John' }], { id: 1, name: 'Jane' }, (x) => x.id === 1),
      ).to.eql([{ id: 1, name: 'Jane' }]);
    });
  });
});
