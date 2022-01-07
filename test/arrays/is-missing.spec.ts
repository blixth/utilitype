import { isMissing } from '../../src/arrays/is-missing';
import { expect } from '../expect-helper';

describe('isMissing', () => {
  context('when given a null value', () => {
    it('should be true', () => {
      const array = null;

      const result = isMissing(array);

      expect(result).to.eql(true);
    });
  });

  context('when given an undefined value', () => {
    it('should be true', () => {
      const array = undefined;

      const result = isMissing(array);

      expect(result).to.eql(true);
    });
  });

  context('when given an empty array', () => {
    it('should be true', () => {
      const array: unknown[] | null | undefined = [];

      const result = isMissing(array);

      expect(result).to.eql(true);
    });
  });
});
