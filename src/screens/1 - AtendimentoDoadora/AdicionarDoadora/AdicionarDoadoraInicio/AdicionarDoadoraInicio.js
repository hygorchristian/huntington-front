import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { useFormik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';

import { useDispatch, useSelector } from 'react-redux';
import Api from '~/services/api';
import {
  Container, Header, Content
} from './styles';
import Voltar from '~/components/Voltar/Voltar';
import MuiDatePicker from '~/components/MuiDatePicker';
import MuiSelect from '~/components/MuiSelect';
import validationSchema from './validators';
import MuiInput from '~/components/MuiInput';
import Loading from '~/components/Loading';
import Botao from '~/components/Botao';
import { NovaDoadoraActions } from '~/store/ducks/doadora/novaDoadora';

function AdicionarDoadoraInicio({ onProximo }) {
  const [etnias, setEtnias] = useState([]);

  useEffect(() => {
    async function getEtnias() {
      const { data } = await Api.getEtnias({});
      if (data) {
        setEtnias(data);
      } else {
        console.tron.error('Não há etnias');
      }
    }
    getEtnias();
  }, []);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.doadora.novaDoadora.data);

  const onSubmit = (values, formik) => {
    dispatch(NovaDoadoraActions.novaDoadoraSetData(values));
    onProximo();
  };

  const formik = useFormik({
    initialValues: {
      name: data ? data.name : '',
      birth: data ? data.birth : new Date(),
      marital_status: data ? data.marital_status : '',
      etnia: data ? data.etnia : ''
    },
    onSubmit,
    validationSchema
  });

  return (
    <Container>
      <Voltar label="Mutirão dia da saúde" route="/doadora/pre-cadastros/1" />
      <Header>
        <h1>Pré-cadastro</h1>
        <span>(Recepção)</span>
      </Header>
      <Content>
        <form onSubmit={formik.handleSubmit}>
          <MuiInput
            name="name"
            label="Nome"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
            helperText={formik.errors.name}
          />
          <MuiDatePicker
            name="birth"
            label="Data de Nascimento"
            value={formik.values.birth}
            onChange={(e) => {
              formik.setFieldValue('birth', e);
            }}
            error={formik.errors.birth}
            helperText={formik.errors.birth}
          />
          <MuiSelect
            name="marital_status"
            label="Estado Civil"
            value={formik.values.marital_status}
            handleChange={(e) => {
              formik.setFieldValue('marital_status', e.target.value);
            }}
            error={formik.errors.marital_status}
          >
            <MenuItem value="casada">Casada</MenuItem>
            <MenuItem value="solteira">Solteira</MenuItem>
            <MenuItem value="divorciada">Divorciada</MenuItem>
            <MenuItem value="viúva">Viúva</MenuItem>
          </MuiSelect>
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
                <MenuItem value={etnia}>{etnia.name}</MenuItem>
              ))
            }
          </MuiSelect>
          {formik.isSubmitting && <Loading size={20} />}
        </form>
        <div className="buttons">
          <Botao
            color=""
            endIcon="arrow-right"
            onClick={formik.submitForm}
          >
            Próximo
          </Botao>
        </div>
      </Content>
    </Container>
  );
}

export default withRouter(AdicionarDoadoraInicio);
