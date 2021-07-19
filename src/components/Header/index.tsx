import React from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style';

const Header = () => {
  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={ logoImg } alt="dt-money" />
        </div>
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}

export default Header;
