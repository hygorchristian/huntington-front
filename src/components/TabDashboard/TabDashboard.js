import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
 Container, Header, Tab, Content
} from './styles';

function TabItem({ children, click, selected }) {
  return (
    <Tab onClick={click} selected={selected}>
      <span>{children}</span>
      {selected && <div />}
    </Tab>
  );
}

function TabDashboard({ tabs, index = 0 }) {
  const history = useHistory();
  const content = tabs[index].content;
  const selected = tabs[index];

  const setTabUrl = (val) => {
    const url = `${window.location.pathname}?tab=${val}`;
    history.push(url);
  };

  const click = (tab) => {
    setTabUrl(tab.url);
  };

  return (
    <Container>
      <Header>
        {tabs.map((tab) => (
          <TabItem selected={selected.label === tab.label} key={tab.label} click={() => click(tab)}>
            {tab.label}
          </TabItem>
        ))}
      </Header>
      <Content>
        {content}
      </Content>
    </Container>
);
}

export default TabDashboard;
