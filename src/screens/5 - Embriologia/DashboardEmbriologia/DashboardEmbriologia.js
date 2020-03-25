import React from 'react';
import Calendar from '~/components/MaterialCalendar';

import TabDashboard from '~/components/TabDashboard';
import tabs, { getIndex } from './tabs';

import {
  Container, Main, Side
} from './styles';
import { getUrlParam } from '~/utils/url';


function DashboardEmbriologia() {
  const tab = getUrlParam('tab', 'coletas');
  const index = getIndex(tab);

  return (
    <Container>
      <Side>
        <div className="side-content">
          <h1>Bem-vinda ao seu dashboard, Raquel</h1>
          <Calendar
            orientation="flex-col"
          />
          <div className="tarefas">
            <div className="tarefas-header">
              <h2>Tarefas</h2>
              <span>em 12 de Setembro, 2019</span>
            </div>
            <div className="tarefa">
              <label>Descongelamento</label>
              <span>16</span>
            </div>
            <div className="tarefa">
              <label>Transporte</label>
              <span>32</span>
            </div>
            <div className="tarefa">
              <label>Coletas</label>
              <span>12</span>
            </div>
          </div>
        </div>
      </Side>
      <Main>
        <TabDashboard tabs={tabs} index={index} />
      </Main>
    </Container>
  );
}

export default DashboardEmbriologia;
