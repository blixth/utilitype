import { isEmpty } from '../../src/objects/is-empty';
import { expect } from '../expect-helper';

describe('isEmpty', () => {
  context('when given an object with keys', () => {
    it('is not considered empty', () => {
      const obj = { a: 'b' };

      expect(isEmpty(obj)).to.eql(false);
    });
  });

  context('when given an object with no keys', () => {
    it('is considered empty', () => {
      const obj = {};

      expect(isEmpty(obj)).to.eql(true);
    });
  });
});
