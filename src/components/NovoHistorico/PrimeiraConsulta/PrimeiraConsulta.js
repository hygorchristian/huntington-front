import React from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';

import { useDispatch } from 'react-redux';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiSelect from '~/components/MuiSelect';
import MuiBooleanValue from '~/components/MuiBooleanValue';
import MuiTextarea from '~/components/MuiTextarea';
import Botao from '~/components/Botao';

import initialValues from './initialValues';
import validationSchema from './validationSchema';

import { Container } from './styles';
import { ConsultaActions } from '~/store/ducks/doadora/consulta';

function PrimeiraConsulta() {
  const { doadora } = useParams();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const data = {
      consult_data: {
        dum: values.dum,
        dpm: values.dpm,
        notes: values.notes,
        medication_allergy: values.medication_allergy,
        comorbidities: values.comorbidities,
        donor: doadora,
      },
      donor_data: {
        etnia: values.etnia,
        indication: values.indication,
        is_donor: values.is_donor,
        compatible: values.compatible,
      }
    };
    dispatch(ConsultaActions.consultaCreateRequest(data, true));
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
      <div className="row date">
        <MuiSelect
          name="etnia"
          label="Confirmar etnia"
          value={formik.values.etnia}
          handleChange={(e) => {
            formik.setFieldValue('etnia', e.target.value);
          }}
          error={formik.errors.etnia}
        >
          <MenuItem value="branca">Branca</MenuItem>
          <MenuItem value="loira">Loira</MenuItem>
          <MenuItem value="parda">Parda</MenuItem>
          <MenuItem value="negra">Negra</MenuItem>
          <MenuItem value="oriental">Oriental</MenuItem>
          <MenuItem value="outra">Outra</MenuItem>
        </MuiSelect>
      </div>
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

      <div className="separator" style={{ marginBottom: 40, marginTop: 40 }} />

      <MuiBooleanValue
        fieldLabel="Chegou até nós por indicação?"
        label="Como?"
        name="indication"
        formik={formik}
      />
      <MuiBooleanValue
        fieldLabel="Entrou para o programa de doação?"
        label="Motivo"
        name="is_donor"
        formik={formik}
      />
      <MuiBooleanValue
        fieldLabel="Tem perfil compatível?"
        label="Motivo"
        name="compatible"
        formik={formik}
      />

      <div className="separator" style={{ marginTop: 40 }} />

      <div className="controllers">
        <Botao endIcon="close" color="">Cancelar</Botao>
        <Botao endIcon="check" onClick={formik.submitForm}>Salvar</Botao>
      </div>

    </Container>
  );
}

export default PrimeiraConsulta;
