import React from 'react';
import ReactDOM from 'react-dom';
import { Server, Model} from 'miragejs';
import App from './App';

new Server({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:08:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'despesas',
          amount: 3000,
          createdAt: new Date('2021-05-12 09:08:00')
        }
      ],
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

