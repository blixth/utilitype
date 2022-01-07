import { partition } from '../../src/arrays/partition';
import { expect } from '../expect-helper';

describe('partition', () => {
  it('partitions the given array with the given function', () => {
    const array = [1, 2, 3, 4];
    const isEven = (num: number) => num % 2 === 0;

    const result = partition(array, isEven);

    expect(result[0]).to.eql([2, 4]);
    expect(result[1]).to.eql([1, 3]);
  });
});
