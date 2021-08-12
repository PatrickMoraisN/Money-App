import React from 'react'
import { Container } from './style';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

const Summary = () => {
  const {transactions} = React.useContext(TransactionsContext);

  const totalDeposits = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      return acc + transaction.amount;
    }
    return acc;
  }, 0)


  const totalWithdraw = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'withdraw') {
      return transaction.amount + acc;
    }
    return acc;
  }, 0)

  const totalValue = totalDeposits - totalWithdraw;
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ incomeImg } alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(totalDeposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={ outcomeImg } alt="Entradas" />
        </header>
        <strong>- {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(totalWithdraw)}</strong>
      </div>

      <div className={totalValue < 0 ? 'red-background' : 'highlight-background'}>
        <header>
          <p>Total</p>
          <img src={ totalImg } alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(totalValue)}</strong>
      </div>
    </Container>
  )
}

export default Summary;
