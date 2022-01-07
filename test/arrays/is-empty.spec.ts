import { isEmpty } from '../../src/arrays/is-empty';
import { expect } from '../expect-helper';

describe('isEmpty', () => {
  context('when given an empty array', () => {
    it('is considered to be emtpy', () => {
      expect(isEmpty([])).to.eql(true);
    });
  });

  context('when given a non empty array', () => {
    it('is not considered to be empty', () => {
      expect(isEmpty([1])).to.eql(false);
    });
  });
});
