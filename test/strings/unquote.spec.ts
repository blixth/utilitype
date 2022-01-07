import { unquote } from '../../src/strings/unquote';
import { expect } from '../expect-helper';

describe('unquote', () => {
  context('when given a string without quotes', () => {
    it('returns that string', () => {
      expect(unquote('My pancake')).to.eql('My pancake');
    });
  });

  context('when given a double-quoted string', () => {
    it('returns the string without quotes', () => {
      expect(unquote('"My pancake"')).to.eql('My pancake');
    });
  });

  context('when given a string containing a double quote', () => {
    it('returns the string as is', () => {
      expect(unquote('My"pancake')).to.eql('My"pancake');
    });
  });

  context('when given a single-quoted tring', () => {
    it('returns the string without quotes', () => {
      expect(unquote("'My pancake'")).to.eql('My pancake');
    });
  });
});
