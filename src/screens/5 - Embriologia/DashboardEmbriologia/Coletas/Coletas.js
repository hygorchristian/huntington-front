import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '~/services/api';

import {
  Container, Item, Data, Lista, DataContainer, Ano
} from './styles';


function ListaItem({ item }) {
  const history = useHistory();
  const navigate = () => {
    history.push(`/embriologia/dashboard/coletar/${item.id}`);
  };

  console.tron.log(item);

  return (
    <Item onClick={navigate}>
      <span className="horario">08:15</span>
      <div className="separator" />
      <div className="dados-usuario">
        <div className="linha">
          <h2 className="nome">{item.donor.name}</h2>
          <span className="pin">PIN 123456</span>
        </div>
        <div className="linha">
          <span className="consulta">Aguardando coleta</span>
        </div>
      </div>
      <div className="acao">
        Ir para ficha >
      </div>
    </Item>
  );
}

function Coletas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.getCollectings({ done_ne: true }).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Container>
      <Lista>
        {data.map((item) => (
          <ListaItem key={item.id} item={item} />
        ))}
      </Lista>
    </Container>
  );
}

export default Coletas;
