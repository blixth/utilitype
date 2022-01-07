import { isEmpty } from '../../src/enumerables/is-empty';
import { expect } from '../expect-helper';

describe('isEmpty', () => {
  context('when given an empty object', () => {
    it('is considered empty', () => {
      expect(isEmpty({})).to.eql(true);
    });
  });

  context('when given a non empty object', () => {
    it('is not considered empty', () => {
      expect(isEmpty({ food: 'pizza' })).to.eql(false);
    });
  });

  context('when given an empty array', () => {
    it('is considered empty', () => {
      expect(isEmpty([])).to.eql(true);
    });
  });

  context('when given an array with items', () => {
    it('is not considered empty', () => {
      expect(isEmpty(['pizza'])).to.eql(false);
    });
  });
});
