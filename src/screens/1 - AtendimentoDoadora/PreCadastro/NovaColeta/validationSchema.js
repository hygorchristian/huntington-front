import * as Yup from 'yup';

export default Yup.object().shape({
  coleta: Yup.date()
    .typeError('Data inválida')
    .min(new Date(), 'A data deve ser a partir de hoje')
    .required('Campo obrigatório'),
});
