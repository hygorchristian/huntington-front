import React from 'react';

import { Container } from './styles';
import MuiInput from '~/components/MuiInput';

function OvuloColetaInput({ formik, ...props }) {
  const handleOvuleChange = (e) => {
    const val = Number(e.target.value);

    formik.setFieldValue('ovule_total', val);
    formik.setFieldValue('lotes', Math.ceil(val / 7));
    formik.setFieldValue('palhetas', Math.ceil(val / 4));
  };

  return (
    <Container {...props}>
      <div className="qnt">
        <MuiInput
          label="Quantidade total de óvulos"
          type="number"
          name="ovule_total"
          value={formik.values.ovule_total}
          onChange={handleOvuleChange}
          error={formik.errors.ovule_total}
          helperText={formik.errors.ovule_total}
        />
      </div>
      <div className="extra-info highlight">
        {/* <MuiInput */}
        {/*  label="Maduros" */}
        {/*  type="number" */}
        {/*  name="ovule_mature" */}
        {/*  value={formik.values.ovule_mature} */}
        {/*  onChange={formik.handleChange} */}
        {/*  error={formik.errors.ovule_mature} */}
        {/*  helperText={formik.errors.ovule_mature} */}
        {/* /> */}
        <MuiInput
          label="Lotes"
          type="number"
          name="lotes"
          value={formik.values.lotes}
          error={formik.errors.lotes}
          helperText={formik.errors.lotes}
        />
        <MuiInput
          label="Palhetas"
          type="number"
          name="palhetas"
          value={formik.values.palhetas}
          error={formik.errors.palhetas}
          helperText={formik.errors.palhetas}
        />
      </div>
      {/* <div className="extra-info"> */}
      {/*  <MuiInput label="Imaturos" /> */}
      {/*  <MuiInput label="Alterados" /> */}
      {/* </div> */}
    </Container>
  );
}

export default OvuloColetaInput;
