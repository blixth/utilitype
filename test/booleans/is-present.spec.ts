import { isPresent } from '../../src/booleans/is-present';
import { expect } from '../expect-helper';

describe('isPresent', () => {
  context('when given true', () => {
    it('is considered to be present', () => {
      expect(isPresent(true)).to.eql(true);
    });
  });

  context('when given false', () => {
    it('is not considered present', () => {
      expect(isPresent(false)).to.eql(false);
    });
  });

  context('when given undefined', () => {
    it('is not considered to be present', () => {
      expect(isPresent(undefined)).to.eql(false);
    });
  });
});
