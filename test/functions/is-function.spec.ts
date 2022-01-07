import { isFunction } from '../../src/functions/is-function';
import { expect } from '../expect-helper';

describe('isFunction', () => {
  context('when given an arrow function', () => {
    it('returns true', () => {
      expect(isFunction(() => null)).to.eql(true);
    });
  });

  context('when given a vanilla function', () => {
    it('returns true', () => {
      expect(isFunction(() => {})).to.eql(true);
    });
  });

  context('when given null', () => {
    it('returns false', () => {
      expect(isFunction(null)).to.eql(false);
    });
  });
});
