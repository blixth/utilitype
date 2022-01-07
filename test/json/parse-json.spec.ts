import { parseJson } from '../../src/json/parse-json';
import { expect } from '../expect-helper';

describe('parseJson', () => {
  context('when given valid json', () => {
    it('returns that json as an object', () => {
      expect(parseJson('{ "food": "pizza" }')).to.eql({ food: 'pizza' });
    });
  });

  context('when given invalid json', () => {
    it('returns undefined', () => {
      expect(parseJson('{')).to.eql(undefined);
    });
  });
});
