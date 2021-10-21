import { pascalCase } from '../../src/strings/pascal-case';
import { expect } from '../expect-helper';

describe('pascalCase', () => {
  [
    ['a camel cased string', 'aBigCamel', 'ABigCamel'],
    ['a title cased string', 'General Kenobi', 'GeneralKenobi'],
    ['a snake cased string', 'bitten_by_cobra', 'BittenByCobra'],
    ['a mix cased string', 'sponge_bob squarePants', 'SpongeBobSquarePants'],
  ].forEach(([description, input, expected]) => {
    context(`when given ${description}`, () => {
      it('pascal cases the string', () => {
        expect(pascalCase(input)).to.eql(expected);
      });
    });
  });
});
