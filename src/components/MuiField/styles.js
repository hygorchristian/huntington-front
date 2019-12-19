import styled from 'styled-components';
import { Field as FormikField } from 'formik';
import { TextField } from 'formik-material-ui';

export const Container = styled(FormikField).attrs({
  margin: 'normal',
  fullWidth: true,
  component: () => TextField,
  variant: 'outlined'
})`
`;
