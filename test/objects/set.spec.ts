import { set } from '../../src/objects/set';
import { expect } from '../expect-helper';

describe('set', () => {
  context('when setting root level property', () => {
    it('returns an object with that property set', () => {
      const obj = {};

      const newObj = set(obj, ['food'], 'pizza');

      expect(newObj).to.eql({ food: 'pizza' });
    });

    it('does not touch old properties', () => {
      const obj = { chef: 'The Swedish Chef' };

      const newObj = set(obj, ['food'], 'pizza');

      expect(newObj).to.eql({ chef: 'The Swedish Chef', food: 'pizza' });
    });

    it('supports string syntax', () => {
      const obj = {};

      const newObj = set(obj, 'food', 'pizza');

      expect(newObj).to.eql({ food: 'pizza' });
    });
  });

  context('when setting property in existing node', () => {
    it('returns an object with that property set', () => {
      const obj = { food: {} };

      const newObj = set(obj, ['food', 'favorite'], 'pizza');

      expect(newObj).to.eql({ food: { favorite: 'pizza' } });
    });

    it('does not touch old properties', () => {
      const obj = { food: { chef: 'The Swedish Chef' } };

      const newObj = set(obj, ['food', 'favorite'], 'pizza');

      const expected = { food: { chef: 'The Swedish Chef', favorite: 'pizza' } };
      expect(newObj).to.eql(expected);
    });

    it('supports string syntax', () => {
      const obj = { food: {} };

      const newObj = set(obj, 'food.favorite', 'pizza');

      expect(newObj).to.eql({ food: { favorite: 'pizza' } });
    });
  });

  context('when setting property in non-existing node', () => {
    it('returns an object with that property set', () => {
      const obj = {};

      const newObj = set(obj, ['food', 'favorite'], 'pizza');

      expect(newObj).to.eql({ food: { favorite: 'pizza' } });
    });

    it('does not touch old properties', () => {
      const obj = { chef: 'The Swedish Chef' };

      const newObj = set(obj, ['food'], 'pizza');

      expect(newObj).to.eql({ chef: 'The Swedish Chef', food: 'pizza' });
    });

    it('supports string syntax', () => {
      const obj = {};

      const newObj = set(obj, 'food.favorite', 'pizza');

      expect(newObj).to.eql({ food: { favorite: 'pizza' } });
    });
  });

  context('when setting deeply nested keys', () => {
    it('sets that property', () => {
      const obj = { sweden: { chefs: { favorite: 'The Italian Chef' } } };

      const path = ['sweden', 'chefs', 'favorite'];
      const newObj = set(obj, path, 'The Swedish Chef');

      const expected = { sweden: { chefs: { favorite: 'The Swedish Chef' } } };
      expect(newObj).to.eql(expected);
    });
  });
});
