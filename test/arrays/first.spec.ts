import { first } from '../../src/arrays/first';
import { expect } from '../expect-helper';

describe('first', () => {
  context('when given a non empty array', () => {
    it('returns the first element', () => {
      expect(first([1, 2, 3])).to.eql(1);
    });

    it('uses typing which allows direct access to the returned item', () => {
      expect(first([{ food: 'pizza' }]).food).to.eql('pizza');
    });
  });

  context('when given an empty array', () => {
    it('returns undefined', () => {
      expect(first([])).to.eql(undefined);
    });
  });
});
