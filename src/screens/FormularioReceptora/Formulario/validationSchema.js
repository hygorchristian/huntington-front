import * as Yup from 'yup';

export default Yup.object().shape({
  receiver_etnia: Yup.string()
    .required('Obrigatório')
});
