import { isEmpty } from './is-empty';

export const buildStartsWithRegex = (string: string): RegExp => {
  const pattern = !isEmpty(string) ? `^${string}` : '^$';
  return new RegExp(pattern);
};
