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
  const [transactions, setTransactions] = useState<Transaction[]>([
  { id: 1, customer_id: 1, date: "2022-01-01", amount: 1000 },
  { id: 2, customer_id: 1, date: "2022-01-02", amount: 2000 },
  { id: 3, customer_id: 2, date: "2022-01-01", amount: 550 },
  { id: 4, customer_id: 3, date: "2022-01-01", amount: 500 },
  { id: 5, customer_id: 2, date: "2022-01-02", amount: 1300 },
  { id: 6, customer_id: 4, date: "2022-01-01", amount: 750 },
  { id: 7, customer_id: 3, date: "2022-01-02", amount: 1250 },
  { id: 8, customer_id: 5, date: "2022-01-01", amount: 2500 },
  { id: 9, customer_id: 5, date: "2022-01-02", amount: 875 },
  { id: 10, customer_id: 1, date: "2022-01-03", amount: 1500 },
  { id: 11, customer_id: 2, date: "2022-01-03", amount: 700 },
  { id: 12, customer_id: 3, date: "2022-01-03", amount: 600 },
  { id: 13, customer_id: 4, date: "2022-01-03", amount: 800 },
  { id: 14, customer_id: 5, date: "2022-01-03", amount: 1200 },
  { id: 15, customer_id: 1, date: "2022-01-04", amount: 1100 },
  { id: 16, customer_id: 2, date: "2022-01-04", amount: 850 },
  { id: 17, customer_id: 3, date: "2022-01-04", amount: 900 },
  { id: 18, customer_id: 4, date: "2022-01-04", amount: 950 },
  { id: 19, customer_id: 5, date: "2022-01-04", amount: 1300 },
  { id: 20, customer_id: 1, date: "2022-01-05", amount: 1400 },
  { id: 21, customer_id: 2, date: "2022-01-05", amount: 500 },
  { id: 22, customer_id: 3, date: "2022-01-05", amount: 750 },
  { id: 23, customer_id: 4, date: "2022-01-05", amount: 1000 },
  { id: 24, customer_id: 5, date: "2022-01-05", amount: 1100 },
  { id: 25, customer_id: 6, date: "2022-01-01", amount: 900 },
  { id: 26, customer_id: 6, date: "2022-01-02", amount: 1100 },
  { id: 27, customer_id: 6, date: "2022-01-03", amount: 1300 },
  { id: 28, customer_id: 6, date: "2022-01-04", amount: 700 },
  { id: 29, customer_id: 6, date: "2022-01-05", amount: 1600 },
  { id: 30, customer_id: 7, date: "2022-01-01", amount: 600 },
  { id: 31, customer_id: 7, date: "2022-01-02", amount: 800 },
  { id: 32, customer_id: 7, date: "2022-01-03", amount: 1000 },
  { id: 33, customer_id: 7, date: "2022-01-04", amount: 1200 },
  { id: 34, customer_id: 7, date: "2022-01-05", amount: 1400 },
  { id: 35, customer_id: 8, date: "2022-01-01", amount: 950 },
  { id: 36, customer_id: 8, date: "2022-01-02", amount: 1150 },
  { id: 37, customer_id: 8, date: "2022-01-03", amount: 1350 },
  { id: 38, customer_id: 8, date: "2022-01-04", amount: 1550 },
  { id: 39, customer_id: 8, date: "2022-01-05", amount: 1750 },
  { id: 40, customer_id: 9, date: "2022-01-01", amount: 1000 },
  { id: 41, customer_id: 9, date: "2022-01-02", amount: 1200 },
  { id: 42, customer_id: 9, date: "2022-01-03", amount: 1400 },
  { id: 43, customer_id: 9, date: "2022-01-04", amount: 1600 },
  { id: 44, customer_id: 9, date: "2022-01-05", amount: 1800 },
  { id: 45, customer_id: 10, date: "2022-01-01", amount: 1050 },
  { id: 46, customer_id: 10, date: "2022-01-02", amount: 1250 },
  { id: 47, customer_id: 10, date: "2022-01-03", amount: 1450 },
  { id: 48, customer_id: 10, date: "2022-01-04", amount: 1650 },
  { id: 49, customer_id: 10, date: "2022-01-05", amount: 1850 }
]);

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
