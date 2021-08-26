export const isEmpty = (value: any) => {
  if (
    value === undefined ||
    value === '' ||
    value === null ||
    (typeof value === 'object' &&
      Object.entries(value).length === 0 &&
      value instanceof Date === false)
  ) {
    return true;
  }

  return false;
};
