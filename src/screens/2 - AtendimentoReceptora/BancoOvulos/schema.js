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
      name: 'nome',
      type: 'string',
    },
    {
      label: 'Mês',
      name: 'mes',
      type: 'string',
    },
    {
      label: 'Ano',
      name: 'ano',
      type: 'string',
    },
    {
      label: 'Lotes Iniciais',
      name: 'lotes_iniciais',
      type: 'string',
    },
    {
      label: 'Lotes Disponíveis',
      name: 'lotes_disponiveis',
      type: 'string',
    },
  ]
};
