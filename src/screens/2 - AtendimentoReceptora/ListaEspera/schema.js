// function onAdd({ history }) {
//   history.push('/doadora/novo-evento');
// }

function onClick({ history }, id) {
  history.push(`/receptora/lista-espera/${id}`);
}

export default {
  onClick,
  fields: [
    {
      label: 'Ano',
      name: 'ano',
      type: 'string',
    },
    {
      label: 'Mês',
      name: 'mes',
      type: 'string',
    },
    {
      label: 'Receptora',
      name: 'name',
      type: 'string',
    },
    {
      label: 'PIN',
      name: 'pin',
      type: 'string',
    },
    {
      label: 'ABO',
      name: 'abo',
      type: 'string',
    },
    {
      label: 'ABO2',
      name: 'abo2',
      type: 'string',
    },
    {
      label: 'Perfil',
      name: 'etnia.name',
      type: 'string',
    },
    {
      label: 'Status',
      name: 'status',
      type: 'string',
    },
  ],
  filters: [
    {
      label: 'Todos',
      name: 'todos',
      action: async ({ setData, setLoading }) => {
        const response = [1];
        setData(response);
        setLoading(false);
      }
    },
    {
      label: 'Stand By',
      name: 'standby',
      action: async ({ setData, setLoading }) => {
        const response = [1, 2];
        setData(response);
        setLoading(false);
      }
    },
    {
      label: 'Em avaliação',
      name: 'avaliacao',
      action: async ({ setData, setLoading }) => {
        const response = [1, 2, 3];
        setData(response);
        setLoading(false);
      }
    },
    {
      label: 'Reservada',
      name: 'reservada',
      action: async ({ setData, setLoading }) => {
        const response = [1, 2, 3, 4];
        setData(response);
        setLoading(false);
      }
    },
  ]
};
