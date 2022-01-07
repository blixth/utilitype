import { isPresent } from '../../src/any/is-present';
import { expect } from '../expect-helper';

describe('isPresent', () => {
  [
    ['a string with non whitespace characters', 'BANANA'],
    ['an array with a value', ['value']],
    ['an object with keys', { food: 'pizza' }],
    ['true', true],
    ['a function', () => null],
    ['a positive number', 1],
    ['a negative number', -1],
    ['zero', 0],
    ['a date', new Date()],
    ['a function', () => null],
  ].forEach(([valueDescription, value]) => {
    context(`when given ${valueDescription}`, () => {
      it('is considered present', () => {
        expect(isPresent(value)).to.eql(true);
      });
    });
  });

  [
    ['an empty object', {}],
    ['an empty array', []],
    ['false', false],
    ['null', null],
    ['undefined', undefined],
    ['an empty string', ''],
    ['a string with only whitespace', '\n\t '],
  ].forEach(([valueDescription, value]) => {
    context(`when given ${valueDescription}`, () => {
      it('is not considered present', () => {
        expect(isPresent(value)).to.eql(false);
      });
    });
  });
});
