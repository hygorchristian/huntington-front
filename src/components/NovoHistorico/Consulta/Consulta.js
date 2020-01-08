import React from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';

import { useDispatch } from 'react-redux';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiBooleanValue from '~/components/MuiBooleanValue';
import MuiTextarea from '~/components/MuiTextarea';
import Botao from '~/components/Botao';

import initialValues from './initialValues';
import validationSchema from './validationSchema';

import { Container } from './styles';
import { ConsultaActions } from '~/store/ducks/doadora/consulta';

function Consulta() {
  const { doadora } = useParams();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const data = { ...values, donor: doadora };
    dispatch(ConsultaActions.consultaCreateRequest(data, false));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });


  return (
    <Container>
      <div className="row date">
        <MuiDatePicker
          name="dum"
          label="Data da Última Menstruação"
          value={formik.values.dum}
          onChange={(e) => {
            formik.setFieldValue('dum', e);
          }}
          error={formik.errors.dum}
          helperText={formik.errors.dum}
        />
      </div>
      <div className="row date">
        <MuiDatePicker
          name="dpm"
          label="Data da Próxima Menstruação"
          value={formik.values.dpm}
          onChange={(e) => {
            formik.setFieldValue('dpm', e);
          }}
          error={formik.errors.dpm}
          helperText={formik.errors.dpm}
        />
      </div>
      <div className="row date" />
      <MuiBooleanValue
        fieldLabel="Alergia a alguma medicação?"
        label="Qual?"
        name="medication_allergy"
        formik={formik}
      />
      <MuiBooleanValue
        fieldLabel="Comorbidades?"
        label="Quais?"
        name="comorbidities"
        formik={formik}
      />

      <div className="separator" style={{ marginTop: 40, marginBottom: 40 }} />

      <MuiTextarea
        name="notes"
        label="Anotação de Enfermagem"
        value={formik.values.notes}
        onChange={formik.handleChange}
        error={formik.errors.notes}
        helperText={formik.errors.notes}
      />

      <div className="separator" style={{ marginTop: 40 }} />

      <div className="controllers">
        <Botao endIcon="close" color="">Cancelar</Botao>
        <Botao endIcon="check" onClick={formik.submitForm}>Salvar</Botao>
      </div>

    </Container>
  );
}

export default Consulta;
