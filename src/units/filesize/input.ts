import { Format } from './format';

export type Input =
  | { [Format.kB]: number }
  | { [Format.MB]: number }
  | { [Format.GB]: number }
  | { [Format.TB]: number };
