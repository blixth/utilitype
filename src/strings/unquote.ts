import { last } from '../arrays/last';

export function unquote(str: string): string {
  const [firstChar, ...rest] = str.split('');
  const lastChar = last(rest);

  if (firstChar === lastChar) {
    return str.replace(/["']/g, '');
  }

  return str;
}
