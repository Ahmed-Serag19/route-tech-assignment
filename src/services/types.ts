// types.ts
export interface Customer {
  id: string; // Use string to match the data
  name: string;
}

export interface Transaction {
  id: number;
  customer_id: number;
  date: string;
  amount: number;
}
