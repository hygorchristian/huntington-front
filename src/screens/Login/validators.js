import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('O e-mail é informado é inválido')
    .required('Campo obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve conter pelo menos 6 caracteres')
    .max(30, 'A senha deve conter até 30 caracteres')
    .required('Campo obrigatório')
});
