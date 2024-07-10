# Customer Transactions Dashboard

This project is a customer transactions dashboard built using React and TypeScript. The dashboard displays a list of customers along with their transaction data and includes features for filtering the list by customer name or transaction amount. Additionally, it provides a graph showing the total transaction amount per day for the selected customer.

## Features

- Display a list of customers with their total transactions, total amount spent, and average amount per transaction.
- Filter customers by name and by total amount spent.
- View detailed transaction data and a graph of transaction amounts for each customer.

## Technologies Used

- React
- TypeScript
- React Router
- Chart.js
- Axios

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/customer-transactions-dashboard.git
   cd customer-transactions-dashboard
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm start
   ```

4. Set up a local server to host the JSON data. You can use any method to serve the `db.json` file, such as `json-server`:

   ```sh
   npm install -g json-server
   json-server --watch db.json --port 5000
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

- `GET /customers`: Returns a list of customers.
- `GET /transactions`: Returns a list of transactions.

## Issues and Fixes

### Issue 1: Data Not Loading Correctly

**Problem:** The application was attempting to access data before it was fully loaded, resulting in undefined errors.
**Solution:** Added defensive checks to ensure the data is fully loaded before accessing properties.

### Issue 2: Filter Not Working Correctly

**Problem:** The filter for total amount was only matching exact amounts, which was not user-friendly.
**Solution:** Updated the filter logic to allow partial matches using `String.includes`, making the filter more flexible.

### Issue 3: Routing Issue

**Problem:** Navigation to customer details was causing "Customer not found" errors.
**Solution:** Ensured consistent use of string type for customer IDs in all components.

### Issue 4: Different Types for Customer ID

**Problem:** The customer ID was being treated as a string in some components and a number in others.
**Solution:** Standardized the customer ID as a string across all components to ensure consistent type handling.

## License

This project is licensed under the MIT License.
