import { last } from '../../src/arrays/last';
import { expect } from '../expect-helper';

describe('last', () => {
  context('when given an array of one item', () => {
    it('returns that item', () => {
      const item = last([1]);

      expect(item).to.eql(1);
    });
  });

  context('when given several items', () => {
    it('returns the last item', () => {
      const item = last([1, 2, 3]);

      expect(item).to.eql(3);
    });
  });

  context('when given an array with no items', () => {
    it('returns undefined', () => {
      const item = last([]);

      expect(item).to.eql(undefined);
    });

    it('returns the fallback value if given', () => {
      const item = last([], { fallback: -1 });

      expect(item).to.eql(-1);
    });
  });
});
