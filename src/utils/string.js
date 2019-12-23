export const isEmpty = (str) => {
  if (!str) {
    return true;
  }
  if (str.length === 0) {
    return true;
  }
  return false;
};
