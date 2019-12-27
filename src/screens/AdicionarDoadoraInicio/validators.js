import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup.string()
    .required('Campo obrigatório'),
  nascimento: Yup.date()
    .max(new Date(), 'Data inválida')
    .required('Campo obrigatório'),
  etnia: Yup.string()
    .required('Campo obrigatório'),
  estadocivil: Yup.string()
    .required('Campo obrigatório'),
});
