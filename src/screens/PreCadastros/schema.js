function onAdd({ history }) {
  history.push('/doadora/novo-evento');
}

function onClick({ history }, id) {
  history.push(`/doadora/pre-cadastros/${id}`);
}

export default {
  onAdd,
  onClick,
  fields: [
    {
      label: 'Evento',
      name: 'event',
      type: 'string',
    },
    {
      label: 'Data',
      name: 'date',
      type: 'date',
    },
    {
      label: 'Participantes',
      name: 'participantes',
      type: 'string',
    },
    {
      label: 'Local',
      name: 'local',
      type: 'string',
    },
  ],
};
