import { isBoolean } from '../../src/booleans/is-boolean';
import { expect } from '../expect-helper';

describe('isBoolean', () => {
  context('when given null', () => {
    it('is not considered a boolean', () => {
      expect(isBoolean(null)).to.eql(false);
    });
  });

  context('when given an empty object', () => {
    it('is not considered a boolean', () => {
      expect(isBoolean({})).to.eql(false);
    });
  });

  context('when given false', () => {
    it('is considered a boolean', () => {
      expect(isBoolean(false)).to.eql(true);
    });
  });

  context('when given true', () => {
    it('is considered a boolean', () => {
      expect(isBoolean(true)).to.eql(true);
    });
  });

  context('when given true as a string', () => {
    it('is not considered a boolean', () => {
      expect(isBoolean('true')).to.eql(false);
    });
  });
});
