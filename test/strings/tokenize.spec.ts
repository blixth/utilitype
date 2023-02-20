import { tokenize } from '../../src/strings/tokenize';
import { expect } from '../expect-helper';

describe('tokenize', () => {
  context('when given a string separated with underscore', () => {
    it('tokenizes the two parts', () => {
      expect(tokenize('VOLVO_V40')[0]).to.eql('VOLVO');
    });
  });

  context('when given a string with two words', () => {
    it('tokenizes the two words', () => {
      expect(tokenize('Audi R8')[0]).to.eql('Audi');
      expect(tokenize('Audi R8')[1]).to.eql('R8');
    });
  });
});
