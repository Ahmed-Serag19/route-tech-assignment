import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Customer, Transaction } from '../services/types';

interface CustomerWithStats extends Customer {
  totalTransactions: number;
  totalAmount: number;
  averageAmount: number;
}

interface CustomerTableProps {
  customers: Customer[];
  transactions: Transaction[];
}

const CustomerTable: React.FC<CustomerTableProps> = ({
  customers,
  transactions,
}) => {
  const [filter, setFilter] = useState({ name: '', amount: '' });
  const [filteredCustomers, setFilteredCustomers] = useState<
    CustomerWithStats[]
  >([]);

  useEffect(() => {
    if (
      customers &&
      transactions &&
      customers.length > 0 &&
      transactions.length > 0
    ) {
      const nameFilter = filter.name.toLowerCase();
      const amountFilter = filter.amount;

      const filtered: CustomerWithStats[] = customers
        .map((customer) => {
          const customerTransactions = transactions.filter(
            (t) => t.customer_id === Number(customer.id)
          );

          const totalAmount = customerTransactions.reduce(
            (acc, t) => acc + t.amount,
            0
          );

          return {
            ...customer,
            totalTransactions: customerTransactions.length,
            totalAmount,
            averageAmount: customerTransactions.length
              ? totalAmount / customerTransactions.length
              : 0,
          };
        })
        .filter(
          (customer) =>
            (!filter.name ||
              customer.name.toLowerCase().includes(nameFilter)) &&
            (amountFilter === '' ||
              customer.totalAmount.toString().includes(amountFilter))
        );

      setFilteredCustomers(filtered);
    } else {
      setFilteredCustomers([]); // Reset if data is not available
    }
  }, [filter, customers, transactions]);

  if (!customers || !transactions) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 max-w-full">
      <h2 className="text-xl font-bold mb-2">Customer List</h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Filter by name"
          value={filter.name}
          onChange={(e) =>
            setFilter({ ...filter, name: e.target.value })
          }
          className="border p-2 mb-2 sm:mb-0 sm:mr-2 flex-grow"
        />
        <input
          type="number"
          placeholder="Filter by amount"
          value={filter.amount}
          onChange={(e) =>
            setFilter({ ...filter, amount: e.target.value })
          }
          className="border p-2 mb-2 sm:mb-0 flex-grow"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Total Transactions</th>
              <th className="py-2 px-4 border">Total Amount</th>
              <th className="py-2 px-4 border">Average Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border">
                  <Link
                    to={`/customer/${customer.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {customer.name}
                  </Link>
                </td>
                <td className="py-2 px-4 border">
                  {customer.totalTransactions}
                </td>
                <td className="py-2 px-4 border">
                  {customer.totalAmount}
                </td>
                <td className="py-2 px-4 border">
                  {customer.averageAmount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
