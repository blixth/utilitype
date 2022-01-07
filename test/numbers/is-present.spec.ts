import { isPresent } from '../../src/numbers/is-present';
import { expect } from '../expect-helper';

describe('isPresent', () => {
  context('when given zero', () => {
    it('is present', () => {
      expect(isPresent(0)).to.eql(true);
    });
  });

  context('when given NaN', () => {
    it('is not present', () => {
      expect(isPresent(NaN)).to.eql(false);
    });
  });

  context('when given null', () => {
    it('is not present', () => {
      expect(isPresent(null as unknown as number)).to.eql(false);
    });
  });

  context('when given undefined', () => {
    it('is not present', () => {
      expect(isPresent(undefined as unknown as number)).to.eql(false);
    });
  });
});
