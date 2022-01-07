import { isEqual } from '../../src/objects/is-equal';
import { expect } from '../expect-helper';

describe('isEqual', () => {
  [
    [{}, {}, true],
    [{ a: 'a' }, { a: 'a' }, true],
    [{ a: 'a' }, { a: 'b' }, false],
    [{ a: '1' }, { a: 1 }, false],
    [{ a: new Date('2018-01-01') }, { a: new Date('2018-01-01') }, true],
    [new Date('2018-01-01'), new Date('2018-01-01'), true],
  ].forEach(([a, b, expected]) => {
    context(`when comparing ${JSON.stringify(a)} with ${JSON.stringify(b)}`, () => {
      it(`returns ${expected}`, () => {
        expect(isEqual(a, b)).to.eql(expected);
      });
    });
  });
});
