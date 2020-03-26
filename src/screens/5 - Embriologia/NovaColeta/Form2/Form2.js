import React from 'react';

import { Container } from './styles';
import StatusInput from '~/components/StatusInput';
import Botao from '~/components/Botao';

function Form2({ onPrev, formik }) {
  const handleOvuloChange = (index, val) => {
    const _lotes = formik.values.ovulebanks;

    const _lote = _lotes[index];
    _lote.ovule_count = val;

    _lotes[index] = _lote;

    formik.setFieldValue('ovulebanks', _lotes);
  };

  const handlePalhetaChange = (index, val) => {
    const _lotes = formik.values.ovulebanks;

    const _lote = _lotes[index];
    _lote.pallet_count = val;

    _lotes[index] = _lote;

    formik.setFieldValue('ovulebanks', _lotes);
  };

  return (
    <Container>
      {formik.values.ovulebanks.map((lote, index) => (
        <StatusInput
          l={lote.reference}
          ovulos={lote.ovule_count}
          palhetas={lote.pallet_count}
          setOvulos={(e) => handleOvuloChange(index, e.target.value)}
          setPalhetas={(e) => handlePalhetaChange(index, e.target.value)}
        />
      ))}
      <div className="separator" />
      <div className="controller">
        <Botao startIcon="arrow-left" color="error" onClick={onPrev}>Anterior</Botao>
        <Botao onClick={formik.submitForm} endIcon="check">Concluir</Botao>
      </div>
    </Container>
  );
}

export default Form2;
