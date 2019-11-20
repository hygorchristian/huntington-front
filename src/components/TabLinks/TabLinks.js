import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  Container, Header, Tab, Content
} from './styles';

function TabItem({ children, click, selected }) {
  return (
    <Tab onClick={click}>
      <span>{children}</span>
      {selected && <div />}
    </Tab>
  );
}

function TabLinks({ history, tabs, location: { search } }) {
  const [_, selected] = search.split('=');

  const click = (tab) => {
    history.push(tab.link);
  };

  return (
    <Container>
      <Header>
        {tabs.map((tab) => (
          <TabItem selected={tab.id === selected} key={tab.label} click={() => click(tab)}>
            {tab.label}
          </TabItem>
        ))}
      </Header>
    </Container>
  );
}

export default withRouter(TabLinks);
