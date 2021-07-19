import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { CreateGlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <CreateGlobalStyle />
    </>
  );
}

export default App;
