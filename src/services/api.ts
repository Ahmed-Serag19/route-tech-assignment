import axios from "axios";

const API_URL = "http://localhost:5000";

export const getCustomers = () => axios.get(`${API_URL}/customers`);
export const getTransactions = () => axios.get(`${API_URL}/transactions`);
