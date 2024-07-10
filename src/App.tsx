import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getCustomers, getTransactions } from './services/api';
import CustomerTable from './components/CustomerTable';
import CustomerDetail from './routes/CustomerDetail';
import { Customer, Transaction } from './services/types';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getCustomers().then((response) => {
      console.log('Customers:', response.data);
      setCustomers(response.data);
    });
    getTransactions().then((response) => {
      console.log('Transactions:', response.data);
      setTransactions(response.data);
    });
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Customer Transactions
        </h1>
        <Routes>
          <Route
            path="/"
            element={
              <CustomerTable
                customers={customers}
                transactions={transactions}
              />
            }
          />
          <Route
            path="/customer/:id"
            element={
              <CustomerDetail
                customers={customers}
                transactions={transactions}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
