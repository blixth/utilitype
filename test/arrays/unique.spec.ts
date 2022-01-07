import { unique } from '../../src/arrays/unique';
import { expect } from '../expect-helper';

describe('unique', () => {
  context('when given an array with unique elements', () => {
    it('returns that array', () => {
      const array = [1, 2, 3];

      const result = unique(array);

      expect(result).to.eql(array);
    });
  });

  context('when given an array with non unique elements', () => {
    it('strips out duplicate values', () => {
      const array = [1, 2, 2, 3];

      const result = unique(array);

      expect(result).to.eql([1, 2, 3]);
    });
  });

  context('when given an array with objects', () => {
    it('considers objects unique', () => {
      const array = [{ food: 'pizza' }, { food: 'pizza' }];

      const result = unique(array);

      expect(result).to.eql(array);
    });
  });

  context('when given a custom comparator', () => {
    it('respects that comparator', () => {
      const array = [{ food: 'pizza' }, { food: 'pizza' }];
      const matchingData = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

      const result = unique(array, matchingData);

      expect(result).to.eql([{ food: 'pizza' }]);
    });
  });
});
