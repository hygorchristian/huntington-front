import * as Yup from 'yup';

export default Yup.object().shape({
  follicles: Yup.number()
    .typeError('Número inválido')
    .required('Campo obrigatório'),
  able_to_donate: Yup.boolean()
    .typeError('Valor inválido')
    .required('Campo obrigatório'),
});
