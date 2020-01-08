import * as Yup from 'yup';

export const novoEventoSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Campo obrigatório')
    .required('Campo obrigatório'),
  date: Yup.string()
    .required('Campo obrigatório'),
  address: Yup.object().shape({
    address: Yup.string()
      .min(1, 'Campo obrigatório')
      .required('Campo obrigatório')
  })
});
