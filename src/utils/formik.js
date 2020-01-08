import lodash from 'lodash';

export const getValue = (formik, field) => {
  const path = `values.${field}`.split('.');
  return lodash.get(formik, path, null);
};

export const getError = (formik, field) => {
  const path = `errors.${field}`.split('.');
  return lodash.get(formik, path, null);
};
