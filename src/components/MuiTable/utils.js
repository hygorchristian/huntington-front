import lodash from 'lodash';

function desc(a, b, orderBy) {
  const obj1 = lodash.get(a, orderBy, null);
  const obj2 = lodash.get(b, orderBy, null);

  if (obj2 < obj1) {
    return -1;
  }
  if (obj2 > obj1) {
    return 1;
  }
  return 0;
}

export const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
};

export const getSorting = (order, orderBy) => (order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy));
