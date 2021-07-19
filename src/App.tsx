import React from 'react';
import styled from 'styled-components';
import { CreateGlobalStyle } from './styles/global';

const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;
`
function App() {
  return (
    <Title>
      Hello, world
      <CreateGlobalStyle />
    </Title>
  );
}

export default App;
