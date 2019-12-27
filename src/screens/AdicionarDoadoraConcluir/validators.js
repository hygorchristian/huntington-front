import * as Yup from 'yup';

export default Yup.object().shape({
  rg: Yup.string()
    .required('Campo obrigatório'),
  orgao: Yup.string()
    .required('Campo obrigatório'),
  endereco: Yup.string()
    .required('Campo obrigatório'),
  complemento: Yup.string()
    .required('Campo obrigatório'),
  numero: Yup.string()
    .required('Campo obrigatório'),
  cep: Yup.string()
    .required('Campo obrigatório'),
  celular: Yup.string()
    .required('Campo obrigatório'),
  telefone: Yup.string()
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
});
