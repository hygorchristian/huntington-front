import React from 'react';
import { MdMoreVert } from 'react-icons/md';

import {
  Container, Header, Content
} from './styles';
import Voltar from '~/components/Voltar/Voltar';
import LabelValue from '~/components/LabelValue';

function Coleta() {
  return (
    <Container>
      <Voltar label="Coletas | Maria Carolina do Rosário" route="/controladoria/doadoras/1/" />
      <Header>
        <h1>1ª Coleta</h1>
      </Header>
      <Content>
        <table>
          <thead>
            <th>ID</th>
            <th>PIN</th>
            <th>Nome</th>
            <th>Mês</th>
            <th>Ano</th>
            <th>Lotes totais</th>
            <th>Lotes disponíveis</th>
            <th />
          </thead>
          <tbody>
            <tr>
              <td style={{ width: 150 }}>123456</td>
              <td style={{ width: 150 }}>12345678</td>
              <td style={{ width: 250 }}>Carolina Marrocos</td>
              <td>Agosto</td>
              <td style={{ width: 100 }}>2018</td>
              <td style={{ width: 100 }}>3</td>
              <td style={{ width: 150 }}>1</td>
              <td style={{ width: 100 }}>
                <a>
                  <MdMoreVert />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="complemento">
          <LabelValue label="Data de congelamento">
            <span>05/08/19</span>
          </LabelValue>
          <LabelValue label="Embriologista Cong">
            <span>Bruna Andrade</span>
          </LabelValue>
          <LabelValue label="Método">
            <span>TIP</span>
          </LabelValue>
          <div className="extra-info">
            <LabelValue label="#óvulos">
              <span style={{ width: '100%', textAlign: 'center' }}>21</span>
            </LabelValue>
            <LabelValue label="#óvulos restantes">
              <span style={{ width: '100%', textAlign: 'center' }}>7</span>
            </LabelValue>
          </div>
          <div />
          <div />
          <LabelValue label="Tanque">
            <span>14</span>
          </LabelValue>
          <div className="extra-info">
            <LabelValue label="#palhetas">
              <span style={{ width: '100%', textAlign: 'center' }}>6</span>
            </LabelValue>
            <LabelValue label="#palhetas restantes">
              <span style={{ width: '100%', textAlign: 'center' }}>2</span>
            </LabelValue>
          </div>
        </div>
        <div className="status-box">
          <h1>L1</h1>
          <div className="separator" />
          <div className="content">
            <LabelValue label="Status">
              <span>Disponível</span>
            </LabelValue>
            <div />
            <div />
            <div className="extra-info">
              <LabelValue label="#óvulos">
                <span style={{ width: '100%', textAlign: 'center' }}>21</span>
              </LabelValue>
              <LabelValue label="#óvulos restantes">
                <span style={{ width: '100%', textAlign: 'center' }}>7</span>
              </LabelValue>
            </div>
            <div />
          </div>
        </div>
        <div className="status-box">
          <h1>L2</h1>
          <div className="separator" />
          <div className="content">
            <LabelValue label="Status">
              <span>Reservado</span>
            </LabelValue>
            <LabelValue label="Status">
              <span>Reservado</span>
            </LabelValue>
            <LabelValue label="Status">
              <span>Reservado</span>
            </LabelValue>
            <div className="extra-info">
              <LabelValue label="#óvulos">
                <span style={{ width: '100%', textAlign: 'center' }}>21</span>
              </LabelValue>
              <LabelValue label="#óvulos restantes">
                <span style={{ width: '100%', textAlign: 'center' }}>7</span>
              </LabelValue>
            </div>
            <div />

            <LabelValue label="Status">
              <span>Reservado</span>
            </LabelValue>
            <LabelValue label="Status">
              <span>Reservado</span>
            </LabelValue>
          </div>
        </div>
        <div className="status-box">
          <h1>L3</h1>
          <div className="separator" />
          <div className="content">
            <LabelValue label="Status">
              <span>Reservado</span>
            </LabelValue>
            <LabelValue label="Status">
              <span>Reservado</span>
            </LabelValue>
            <LabelValue label="Status">
              <span>Reservado</span>
            </LabelValue>
            <div className="extra-info">
              <LabelValue label="#óvulos">
                <span style={{ width: '100%', textAlign: 'center' }}>21</span>
              </LabelValue>
              <LabelValue label="#óvulos restantes">
                <span style={{ width: '100%', textAlign: 'center' }}>7</span>
              </LabelValue>
            </div>
            <div />

            <LabelValue label="Status">
              <span>Reservado</span>
            </LabelValue>
            <LabelValue label="Status">
              <span>Reservado</span>
            </LabelValue>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Coleta;
