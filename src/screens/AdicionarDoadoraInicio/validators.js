import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .required('Campo obrigatório'),
  birth: Yup.date()
    .max(new Date(), 'Data inválida')
    .required('Campo obrigatório'),
  marital_status: Yup.string()
    .required('Campo obrigatório'),
  etnia: Yup.string()
    .required('Campo obrigatório'),
});
