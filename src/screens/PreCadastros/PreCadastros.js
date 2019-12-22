import React from 'react';
import { FiUsers, FiMapPin } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MuiTable from '~/components/MuiTable';
import schema from './schema';
import mock from './mock';

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
        <Typography className={classes.title} variant="h6" noWrap>
            Pré-Cadastros
        </Typography>
      </Header>
      <Content>
        <MuiTable schema={schema} data={mock} />
      </Content>
    </Container>
);
}

export default PreCadastros;
