import { LengthUnit } from './length-unit';

interface IOptions {
  from: LengthUnit;
  to: LengthUnit;
  dpi?: number;
}

const UNITS: { [key in LengthUnit]: { px: (dpi: number) => number } } = {
  px: { px: () => 1 },
  pt: { px: () => 1 / 0.75 },
  in: { px: (dpi: number) => dpi },
  cm: { px: (dpi: number) => dpi / 2.54 },
};

/**
 * Converts the given value to the provided length unit.
 *
 * @Example
 *
 *   convertLengthUnit(10, { from: 'px', to: 'pt' })
 *   //=> 7.5
 *
 *   convertLengthUnit(10, { from: 'px', to: 'in', dpi: 100 })
 *   //=> 0.3
 */
export function convertLengthUnit(
  value: number,
  { from, to, dpi = 300 }: IOptions,
): number {
  const pxValue = value * UNITS[from].px(dpi);

  return pxValue / UNITS[to].px(dpi);
}
