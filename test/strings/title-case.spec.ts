import { titleCase } from '../../src/strings/title-case';
import { expect } from '../expect-helper';

describe('titleCase', () => {
  context('when given a space delimeted string', () => {
    it('title cases the string', () => {
      expect(titleCase('her royal highness')).to.eql('Her Royal Highness');
    });
  });

  context('when given camelCase string', () => {
    it('title cases the string', () => {
      expect(titleCase('helloThere')).to.eql('Hello There');
    });
  });

  context('when given a PascalCase string', () => {
    it('title cases the string', () => {
      expect(titleCase('HelloThere')).to.eql('Hello There');
    });
  });

  context('when given a snake_case string', () => {
    it('title cases the string', () => {
      expect(titleCase('hello_there')).to.eql('Hello There');
    });
  });
});
