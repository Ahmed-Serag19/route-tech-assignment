import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Customer, Transaction } from '../services/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface TransactionGraphProps {
  customer: Customer;
  transactions: Transaction[];
}

const TransactionGraph: React.FC<TransactionGraphProps> = ({
  customer,
  transactions,
}) => {
  const data = {
    labels: transactions.map((t) => t.date),
    datasets: [
      {
        label: `Total Transactions for ${customer.name}`,
        data: transactions.map((t) => t.amount),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Transaction Amounts for ${customer.name}`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="text-xl font-bold mb-2">Transaction Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TransactionGraph;
