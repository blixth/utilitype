import { BASE_MULTIPLIER } from './base-multiplier';
import { Format } from './format';

export const MULTIPLIERS: { [key in Format]: number } = {
  [Format.kB]: BASE_MULTIPLIER,
  [Format.MB]: BASE_MULTIPLIER ** 2,
  [Format.GB]: BASE_MULTIPLIER ** 3,
  [Format.TB]: BASE_MULTIPLIER ** 4,
};
