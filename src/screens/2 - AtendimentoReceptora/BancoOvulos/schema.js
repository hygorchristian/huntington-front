function onClick({ history }, id) {
  history.push(`/receptora/banco-ovulos/${id}`);
}

export default {
  onClick,
  fields: [
    {
      label: 'ID',
      name: 'id',
      type: 'string',
    },
    {
      label: 'PIN',
      name: 'pin',
      type: 'string',
    },
    {
      label: 'Nome',
      name: 'name',
      type: 'string',
    },
    {
      label: 'Mês',
      name: 'month',
      type: 'string',
    },
    {
      label: 'Ano',
      name: 'year',
      type: 'string',
    },
    {
      label: 'Lotes Iniciais',
      name: 'initial',
      type: 'string',
    },
    {
      label: 'Lotes Disponíveis',
      name: 'avaiable',
      type: 'string',
    },
  ]
};
