import React from 'react'
import Summary from '../Summary';
import TransactionsTable from '../TransactionsTable';
import { Container } from './style';

const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}

export default Dashboard;
