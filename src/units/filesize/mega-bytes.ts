import { bytes } from './bytes';
import { Input } from './input';

export function megaBytes(obj: Input): number {
  return bytes(obj) / bytes({ MB: 1 });
}
