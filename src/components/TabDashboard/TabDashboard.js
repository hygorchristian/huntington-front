import React, { useState } from 'react';

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

function TabDashboard({ tabs }) {
  const [content, setContent] = useState(tabs[0].content);
  const [selected, setSelected] = useState(tabs[0]);

  const click = (tab) => {
    setContent(tab.content);
    setSelected(tab);
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
