import { chunk } from '../../src/arrays/chunk';
import { expect } from '../expect-helper';

describe('chunk', () => {
  context('when size is a multiple of the array size', () => {
    it('returns an array of arrays with the same sizes', () => {
      const arr = [1, 2, 3, 4];

      const result = chunk(arr, 2);

      expect(result).to.eql([
        [1, 2],
        [3, 4],
      ]);
    });
  });

  context('when size is not a multiple of the array size', () => {
    it('returns an array of arrays', () => {
      const arr = [1, 2, 3];

      const result = chunk(arr, 2);

      expect(result).to.eql([[1, 2], [3]]);
    });
  });

  context('when array is empty', () => {
    it('returns an empty array', () => {
      const arr: unknown[] = [];

      const result = chunk(arr, 2);

      expect(result).to.eql([]);
    });
  });

  context('when array is smaller than size', () => {
    it('returns an empty array', () => {
      const arr = [1];

      const result = chunk(arr, 2);

      expect(result).to.eql([[1]]);
    });
  });

  context('when size is 0', () => {
    it('returns an array of empty arrays', () => {
      const arr = [1, 2, 3];

      const result = chunk(arr, 0);

      expect(result).to.eql([[], [], []]);
    });
  });
});
