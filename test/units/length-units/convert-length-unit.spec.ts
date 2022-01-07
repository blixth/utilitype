import { convertLengthUnit } from '../../../src/units/length-units/convert-length-unit';
import { LengthUnit } from '../../../src/units/length-units/length-unit';
import { expect } from '../../expect-helper';

describe('convertLengthUnit', () => {
  context('when converting from px to px', () => {
    it('returns the same value', () => {
      expect(
        convertLengthUnit(5, { from: LengthUnit.Pixel, to: LengthUnit.Pixel }),
      ).to.eql(5);
    });
  });

  context('when converting from px to pt', () => {
    it('returns the point value', () => {
      expect(
        convertLengthUnit(10, { from: LengthUnit.Pixel, to: LengthUnit.Point }),
      ).to.eql(7.5);
    });
  });

  context('when converting from px to in', () => {
    it('returns the inch value in respect to default dpi', () => {
      expect(
        convertLengthUnit(30, { from: LengthUnit.Pixel, to: LengthUnit.Inch }),
      ).to.eql(0.1);
    });

    it('returns the inch value in respect to provided dpi', () => {
      const options = { from: LengthUnit.Pixel, to: LengthUnit.Inch, dpi: 100 };

      expect(convertLengthUnit(30, options)).to.eql(0.3);
    });
  });

  context('when converting from px to cm', () => {
    it('returns the centimeter value', () => {
      expect(
        convertLengthUnit(30, { from: LengthUnit.Pixel, to: LengthUnit.Centimeter }),
      ).to.eql(0.254);
    });

    it('returns the centimeter in respect to dpi', () => {
      const options = {
        from: LengthUnit.Pixel,
        to: LengthUnit.Centimeter,
        dpi: 100,
      };

      expect(convertLengthUnit(30, options)).to.eql(0.762);
    });
  });

  context('when converting from in to px', () => {
    it('returns the pixel value', () => {
      expect(
        convertLengthUnit(3, { from: LengthUnit.Inch, to: LengthUnit.Pixel }),
      ).to.eql(900);
    });

    it('returns the pixel in respect to dpi', () => {
      const options = { from: LengthUnit.Inch, to: LengthUnit.Pixel, dpi: 100 };

      expect(convertLengthUnit(3, options)).to.eql(300);
    });
  });

  context('when converting from cm to px', () => {
    it('returns the pixel value', () => {
      expect(
        convertLengthUnit(0.254, {
          from: LengthUnit.Centimeter,
          to: LengthUnit.Pixel,
        }),
      ).to.eql(30);
    });
  });

  context('when converting from pt to px', () => {
    it('returns the pixel value', () => {
      expect(
        convertLengthUnit(7.5, { from: LengthUnit.Point, to: LengthUnit.Pixel }),
      ).to.eql(10);
    });
  });

  context('when converting from in to cm', () => {
    it('returns the cm value', () => {
      expect(
        convertLengthUnit(2, { from: LengthUnit.Inch, to: LengthUnit.Centimeter }),
      ).to.eql(5.08);
    });
  });
});
