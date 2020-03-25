export default {
  aborh: {
    result: {
      type: 'radio',
      values: [
        'A+',
        'A-',
        'B+',
        'B-',
        'AB+',
        'AB-',
        'O+',
        'O-'
      ]
    },
    obs: {
      type: 'textarea'
    }
  },
  sorologias: {
    result: {
      type: 'radio',
      values: [
        'Positivo',
        'Negativo'
      ]
    },
    obs: {
      type: 'checkbox',
      values: [
        'HIV I',
        'HIV II',
        'Anti HBs Ag',
        'Anti HBC Total',
        'HTLV I',
        'HTLV II',
        'Hepatite C',
        'Sífilis',
      ]
    }
  },
  cariotipo: {
    result: {
      type: 'radio',
      values: [
        'Alterado',
        'Normal',
      ]
    },
    obs: {
      type: 'textarea',
    }
  },
  chlamidia: {
    result: {
      type: 'radio',
      values: [
        'Positivo',
        'Negativo'
      ]
    },
    obs: {
      type: 'textarea',
    }
  },
  citologia: {
    result: {
      type: 'radio',
      values: [
        'Alterado',
        'Normal'
      ]
    },
    obs: {
      type: 'textarea',
    }
  },
  cgt: {
    result: {
      type: 'date'
    },
    obs: {
      type: 'textarea',
    }
  },
  dna: {
    result: {
      type: 'date'
    },
    obs: {
      type: 'textarea',
    }
  },
  zika: {
    result: {
      type: 'radio',
      values: [
        'Positivo',
        'Negativo'
      ]
    },
    obs: {
      type: 'textarea',
    }
  },
  fsh: {
    result: {
      type: 'radio',
      values: [
        'Ok',
        'Não ok'
      ]
    },
    obs: {
      type: 'textarea',
    }
  },
};
