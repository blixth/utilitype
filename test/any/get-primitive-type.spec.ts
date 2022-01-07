import { getPrimitiveType } from '../../src/any/get-primitive-type';
import { expect } from '../expect-helper';
import { PrimitiveType } from '../../src/any/primitive-type';

describe('getPrimitiveType', () => {
  context('when given null', () => {
    it('returns nullable', () => {
      expect(getPrimitiveType(null)).to.eql(PrimitiveType.Nullable);
    });
  });

  context('when given undefined', () => {
    it('returns undefined', () => {
      expect(getPrimitiveType(undefined)).to.eql(PrimitiveType.Nullable);
    });
  });

  context('when given a string', () => {
    it('returns string', () => {
      expect(getPrimitiveType('string')).to.eql(PrimitiveType.String);
    });
  });

  context('when given a function', () => {
    it('returns function', () => {
      expect(getPrimitiveType(() => null)).to.eql(PrimitiveType.Function);
    });
  });

  context('when given a number', () => {
    it('returns number', () => {
      expect(getPrimitiveType(1)).to.eql(PrimitiveType.Number);
    });
  });

  context('when given an array', () => {
    it('returns array', () => {
      expect(getPrimitiveType([])).to.eql(PrimitiveType.Array);
    });
  });

  context('when given an object', () => {
    it('returns object', () => {
      expect(getPrimitiveType({})).to.eql(PrimitiveType.Object);
    });
  });

  context('when given a boolean', () => {
    it('returns boolean', () => {
      expect(getPrimitiveType(true)).to.eql(PrimitiveType.Boolean);
    });
  });

  context('when give NaN', () => {
    it('returns nullable', () => {
      expect(getPrimitiveType(NaN)).to.eql(PrimitiveType.Nullable);
    });
  });
});
