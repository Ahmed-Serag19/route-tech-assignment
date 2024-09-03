import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { getCustomers, getTransactions } from './services/api';
import CustomerTable from './components/CustomerTable';
import CustomerDetail from './routes/CustomerDetail';
import { Customer, Transaction } from './services/types';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
  { id: 1, name: "Ahmed Ali" },
  { id: 2, name: "Aya Elsayed" },
  { id: 3, name: "Mina Adel" },
  { id: 4, name: "Sarah Reda" },
  { id: 5, name: "Mohamed Sayed" },
  { id: 6, name: "Hassan Khalil" },
  { id: 7, name: "Laila Ahmed" },
  { id: 8, name: "Omar Zaki" },
  { id: 9, name: "Nora Sami" },
  { id: 10, name: "Tarek Youssef" }
]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // useEffect(() => {
  //   getCustomers().then((response) => {
  //     setCustomers(response.data);
  //   });
  //   getTransactions().then((response) => {
  //     setTransactions(response.data);
  //   });
  // }, []);

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
