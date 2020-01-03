function onClick({ history, params }, id) {
  history.push(`/doadora/pre-cadastros/${params.id}/${id}`);
}

function onAdd({ history, params }) {
  history.push(`/doadora/pre-cadastros/${params.id}/nova-doadora`);
}

export default {
  onClick,
  onAdd,
  fields: [
    {
      label: 'ID',
      name: 'id',
      type: 'string',
      padding: true,
    },
    {
      label: 'Nome',
      name: 'name',
      type: 'string',
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'string',
    },
    {
      label: 'Interesse em doar',
      name: 'interesse_doar',
      type: 'boolean',
    },
    {
      label: 'Apta a doar',
      name: 'apta',
      type: 'string',
    },
    {
      label: 'Status de Atendimento',
      name: 'statusName',
      type: 'string',
    },
  ],
  // filters: [
  //   {
  //     label: 'Todas',
  //     name: 'todas',
  //   },
  //   {
  //     label: 'Programadas',
  //     name: 'programadas',
  //   },
  //   {
  //     label: 'Estimulação',
  //     name: 'estimulacao',
  //   },
  //   {
  //     label: 'Coleta Realizada',
  //     name: 'coletaRealizada',
  //   },
  //   {
  //     label: 'Stand',
  //     name: 'stand',
  //   },
  //   {
  //     label: 'CFA',
  //     name: 'cfa',
  //   },
  // ]
};
