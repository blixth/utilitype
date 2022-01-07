import { isMissing } from '../../src/any/is-missing';
import { expect } from '../expect-helper';

describe('isMissing', () => {
  context('when value is undefined', () => {
    it('returns true', () => {
      const value = undefined;

      const missing = isMissing(value);

      expect(missing).to.eql(true);
    });
  });

  context('when value is null', () => {
    it('returns true', () => {
      const value = null;

      const missing = isMissing(value);

      expect(missing).to.eql(true);
    });
  });

  context('when value is a string', () => {
    it('returns false', () => {
      const value = 'present';

      const missing = isMissing(value);

      expect(missing).to.eql(false);
    });
  });
});
