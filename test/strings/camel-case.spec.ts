import { camelCase } from '../../src/strings/camel-case';
import { expect } from '../expect-helper';

describe('camelCase', () => {
  context('when input is kebab case', () => {
    it('camel cases that string', () => {
      expect(camelCase('foo-bar')).to.eql('fooBar');
    });
  });

  context('when input is scream case', () => {
    it('camel cases that string', () => {
      expect(camelCase('FOO_BAR')).to.eql('fooBar');
    });
  });

  context('when input is pascal case', () => {
    it('camel cases that string', () => {
      expect(camelCase('FooBar')).to.eql('fooBar');
    });
  });

  context('when input is snake case', () => {
    it('camel cases that string', () => {
      expect(camelCase('foo_bar')).to.eql('fooBar');
    });
  });

  context('when input is camel case', () => {
    it('stays camel cased', () => {
      expect(camelCase('fooBar')).to.eql('fooBar');
    });
  });

  context('when input is mixed', () => {
    it('camel cases that string', () => {
      expect(camelCase('fooBarFooBarFOO_BARfoo-bar')).to.eql('fooBarFooBarFooBarFooBar');
    });
  });

  context('when input can not be tokenized', () => {
    it('returns the original input', () => {
      expect(camelCase('-')).to.eql('-');
    });
  });

  context('when input is two separated words', () => {
    it('camel cases that string', () => {
      expect(camelCase('foo bar')).to.eql('fooBar');
    });
  });
});
