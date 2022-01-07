import { except } from '../../src/objects/except';
import { expect } from '../expect-helper';

describe('except', () => {
  context('when given no keys', () => {
    it('returns that object', () => {
      const obj = { snack: 'banana' };

      const result = except(obj);

      expect(result).to.eql({ snack: 'banana' });
    });
  });

  context('when given a key', () => {
    it('returns that object without that key', () => {
      const obj = { snack: 'banana', dish: 'pizza' };

      const result = except(obj, 'snack');

      expect(result).to.eql({ dish: 'pizza' });
    });
  });
});
