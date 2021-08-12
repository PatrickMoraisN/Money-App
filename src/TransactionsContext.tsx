import React, { ReactNode } from 'react';
import { createContext } from 'react';
import { api } from './services/api';

interface TransactionsProps {
  id: number,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string,
}

type TransactionInput = Omit<TransactionsProps, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TrasactionsContextData {
  transactions: TransactionsProps[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TrasactionsContextData>({} as TrasactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = React.useState<TransactionsProps[]>([]);

  React.useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {

    api.post('/transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}