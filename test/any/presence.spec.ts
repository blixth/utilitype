import { presence } from '../../src/any/presence';
import { expect } from '../expect-helper';

describe('presence', () => {
  [
    ['an array with values', [1, 2, 3]],
    ['an object with keys', { a: 'b' }],
    ['a string with characters', 'hello'],
    ['zero', 0],
    ['a positive number', 1],
    ['a negative number', -1],
    ['true', true],
    ['a date', new Date()],
  ].forEach(([valueDescription, value]) => {
    context(`when given ${valueDescription}`, () => {
      it('returns that value', () => {
        expect(presence(value)).to.eql(value);
      });
    });
  });

  [
    ['an array with no values', []],
    ['an object with no keys', {}],
    ['a string with only whitespace', ' \t\n'],
    ['NaN', NaN],
    ['false', false],
    ['undefined', undefined],
    ['null', null],
  ].forEach(([valueDescription, value]) => {
    context(`when given ${valueDescription}`, () => {
      it('returns undefined', () => {
        expect(presence(value)).to.eql(undefined);
      });
    });
  });
});
