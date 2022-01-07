import { sentenceCase } from '../../src/strings/sentence-case';
import { expect } from '../expect-helper';

describe('sentenceCase', () => {
  [
    ['Hi', 'Hi'],
    ['hi', 'Hi'],
    ['hi there', 'Hi there'],
    ['hi_there', 'Hi there'],
    ['spongebob_caseInDa House', 'Spongebob case in da house'],
  ].forEach(([input, output]) => {
    context(`when given ${input}`, () => {
      it(`returns ${output}`, () => {
        expect(sentenceCase(input)).to.eql(output);
      });
    });
  });
});
