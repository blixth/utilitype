import { capitalize } from '../../src/strings/capitalize';
import { expect } from '../expect-helper';

describe('capitalize', () => {
  context('when given an uppercase string', () => {
    it('capitalizes that string', () => {
      expect(capitalize('VOLVO')).to.eql('Volvo');
    });
  });

  context('when given a lowercase string', () => {
    it('capitalizes that string', () => {
      expect(capitalize('audi')).to.eql('Audi');
    });
  });
});
