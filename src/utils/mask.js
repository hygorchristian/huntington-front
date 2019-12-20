export const getMask = (name) => {
  switch (name) {
    case 'cpf':
      return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    case 'cep':
      return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    default:
      return [];
  }
};
