import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TransactionGraph from '../components/TransactionGraph';
import { Customer, Transaction } from '../services/types';

interface CustomerDetailProps {
  customers: Customer[];
  transactions: Transaction[];
}

const CustomerDetail: React.FC<CustomerDetailProps> = ({
  customers,
  transactions,
}) => {
  const { id } = useParams<{ id: string }>();

  console.log('useParams id:', id);
  console.log('Customers array:', customers);

  if (!id) {
    return <div>Customer ID is missing</div>;
  }

  if (customers.length === 0) {
    return <div>Loading...</div>; // Wait for customers data to be loaded
  }

  const customer = customers.find((c) => c.id === id); // Compare as string

  console.log('Customer found:', customer);

  const customerTransactions = transactions.filter(
    (t) => t.customer_id === Number(id)
  );

  if (!customer) {
    return <div>Customer not found</div>;
  }

  return (
    <div>
      <h2 className=" font-bold mb-2  text-2xl">
        Customer Detail:{' '}
        <span className="text-3xl text-red-500">{customer.name}</span>
      </h2>
      <Link
        to="/"
        className="text-blue-500 text-lg font-bold hover:underline mb-4 inline-block"
      >
        Back to Customer List
      </Link>
      <table className="min-w-full bg-white border mb-4">
        <thead className="text-left">
          <tr>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Transaction Amount</th>
          </tr>
        </thead>
        <tbody>
          {customerTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border">{transaction.date}</td>
              <td className="py-2 px-4 border">
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TransactionGraph
        customer={customer}
        transactions={customerTransactions}
      />
    </div>
  );
};

export default CustomerDetail;
