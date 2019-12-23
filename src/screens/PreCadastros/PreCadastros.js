import React from 'react';
import { FiUsers, FiMapPin } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import MuiTable from '~/components/MuiTable';
import schema from './schema';
import mock from './mock';
import { getParams, strapiParams } from '~/utils/url';
import { PreCadastrosActions } from '~/store/ducks/doadora/preCadastros';

import {
 Container, Header, Content
} from './styles';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    width: 250,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  button: {
    marginLeft: 20
  }
}));

function PreCadastros({ history }) {
  const data = useSelector((state) => state.doadora.preCadastros);
  const dispatch = useDispatch();
  const payload = getParams(['q', 'order:ASC', 'sort:id', 'page:1', 'perPage:10', 'filter']);


  React.useEffect(() => {
    dispatch(PreCadastrosActions.preCadastrosLoadRequest(strapiParams(payload)));
  }, []);

  const classes = useStyles();

  const navigate = (id) => {
    history.push(`/doadora/pre-cadastros/${id}`);
  };

  const novoEvento = () => {
    history.push('/doadora/novo-evento');
  };

  return (
    <Container>
      <Header>
        <h1>Pré-Cadastros</h1>
      </Header>
      <Content>
        <MuiTable schema={schema} data={mock} loading={data.loading} />
      </Content>
    </Container>
);
}

export default PreCadastros;
