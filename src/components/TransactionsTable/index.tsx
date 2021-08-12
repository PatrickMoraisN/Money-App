import React from 'react'
import { api } from '../../services/api'
import { Container } from './style'

interface TransactionsProps {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string,
}
const TransactionsTable = () => {
  const [transactions, setTransactions] = React.useState<TransactionsProps[]>([])

React.useEffect(() => {
  const getList = async () => {
    const response = await api.get('/transactions')
    setTransactions(response.data.transactions);
  }
  getList();
}, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionsTable;
