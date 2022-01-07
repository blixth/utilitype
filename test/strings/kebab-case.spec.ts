import { kebabCase } from '../../src/strings/kebab-case';
import { expect } from '../expect-helper';

describe('kebabCase', () => {
  [
    ['SCREAM_CASE', 'scream-case'],
    ['PascalCase', 'pascal-case'],
    ['camelCase', 'camel-case'],
    ['Title Case', 'title-case'],
    ['snake_case', 'snake-case'],
  ].forEach(([input, expected]) => {
    context(`when given ${input}`, () => {
      it('transforms that string to kebab case', () => {
        expect(kebabCase(input)).to.eql(expected);
      });
    });
  });
});
