import { isMissingOrWhiteSpace } from '../../src/strings/is-missing-or-white-space';
import { expect } from '../expect-helper';

describe('isMissingOrWhiteSpace', () => {
  context('when given a null value', () => {
    it('should be true', () => {
      const text = null;

      const result = isMissingOrWhiteSpace(text);

      expect(result).to.eql(true);
    });
  });

  context('when given an undefined value', () => {
    it('should be true', () => {
      const text = undefined;

      const result = isMissingOrWhiteSpace(text);

      expect(result).to.eql(true);
    });
  });

  context('when given an empty string', () => {
    it('should be true', () => {
      const text = '';

      const result = isMissingOrWhiteSpace(text);

      expect(result).to.eql(true);
    });
  });

  context('when given a string with only white space', () => {
    it('should be true', () => {
      const text = '    ';

      const result = isMissingOrWhiteSpace(text);

      expect(result).to.eql(true);
    });
  });

  context('when given a valid string', () => {
    it('should be false', () => {
      const text = 'banana';

      const result = isMissingOrWhiteSpace(text);

      expect(result).to.eql(false);
    });
  });
});
