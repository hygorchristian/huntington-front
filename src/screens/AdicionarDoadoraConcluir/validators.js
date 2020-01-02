import * as Yup from 'yup';

export default Yup.object().shape({
  rg: Yup.string()
    .required('Campo obrigatório'),
  rg_expeditor: Yup.string()
    .required('Campo obrigatório'),
  address: Yup.object().shape({
    address: Yup.string()
      .required('Campo obrigatório'),
    address_comp: Yup.string()
      .required('Campo obrigatório'),
    address_number: Yup.number()
      .typeError('Número inválido')
      .required('Campo obrigatório'),
    cep: Yup.string()
      .required('Campo obrigatório'),
  }),
  celphone: Yup.string()
    .required('Campo obrigatório'),
  phone: Yup.string()
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
});
