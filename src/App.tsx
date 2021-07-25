import React from 'react';
import Modal from 'react-modal';
import NewTransactionModal from './components/NewTransactionModal'
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { CreateGlobalStyle } from './styles/global';


Modal.setAppElement('#root'); //Assessibilidade
function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = React.useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header 
        handleOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <CreateGlobalStyle />
    </>
  );
}

export default App;
