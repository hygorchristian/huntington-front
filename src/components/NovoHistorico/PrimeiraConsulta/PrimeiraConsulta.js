import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import Api from '~/services/api';

import MuiDatePicker from '~/components/MuiDatePicker';
import MuiSelect from '~/components/MuiSelect';
import MuiBooleanValue from '~/components/MuiBooleanValue';
import MuiTextarea from '~/components/MuiTextarea';
import Botao from '~/components/Botao';

import initialValues from './initialValues';
import validationSchema from './validationSchema';
import { showErrorMessage, showSuccessMessage } from '~/utils/notistack';

import { Container } from './styles';

function PrimeiraConsulta() {
  const [etnias, setEtnias] = useState([]);
  const { id, doadora } = useParams();
  const history = useHistory();

  const onSubmit = (values) => {
    const consult_data = {
      dum: values.dum,
      dpm: values.dpm,
      notes: values.notes,
      medication_allergy: values.medication_allergy,
      comorbidities: values.comorbidities,
      donor: doadora,
    };

    const donor_data = {
      etnia: values.etnia,
      indication: values.indication,
      is_donor: values.is_donor,
      compatible: values.compatible,
    };

    Api.createConsultation(consult_data).then(() => {
      showSuccessMessage('Consulta criada com sucesso!');
    }).catch(() => {
      showErrorMessage('Erro ao salvar consulta');
    });

    Api.updateDoadora(doadora, donor_data).then(() => {
      showSuccessMessage('Doadora atualizada com sucesso!');
      history.push(`/doadora/pre-cadastros/${id}/${doadora}?tab=historico`);
    }).catch(() => {
      showErrorMessage('Erro ao atualizar dados da doadora');
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  const fetchEtnias = async () => {
    const { data: etniaData } = await Api.getEtnias();
    if (etniaData) {
      setEtnias(etniaData);
    } else {
      showErrorMessage('Houve um erro. Tente novamente');
      history.push(`/doadora/pre-cadastros/${id}/${doadora}?tab=historico`);
    }
  };

  useEffect(() => {
    fetchEtnias();
  }, []);

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
          label="Etnia"
          value={formik.values.etnia}
          handleChange={(e) => {
            formik.setFieldValue('etnia', e.target.value);
          }}
          error={formik.errors.etnia}
        >
          {
            etnias.map((etnia) => (
              <MenuItem value={etnia._id}>{etnia.name}</MenuItem>
            ))
          }
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
