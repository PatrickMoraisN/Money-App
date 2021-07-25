import React from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style';

type HeaderProps = {
  handleOpenNewTransactionModal: () => void;
}

const Header = ({handleOpenNewTransactionModal}: HeaderProps) => {

  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={ logoImg } alt="dt-money" />
        </div>
        <button type="button" onClick={ handleOpenNewTransactionModal }>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}

export default Header;
