import { isPresent } from '../../src/functions/is-present';
import { expect } from '../expect-helper';

describe('isPresent', () => {
  context('when given a function', () => {
    it('returns true', () => {
      expect(isPresent(() => null)).to.eql(true);
    });
  });

  context('when given null', () => {
    it('returns false', () => {
      expect(isPresent(null as unknown as () => unknown)).to.eql(false);
    });
  });
});
