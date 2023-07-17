import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Milk',
      amount: 43,
      category: 'Grocery',
    },
    {
      id: 2,
      description: 'Milk',
      amount: 14,
      category: 'Grocery',
    },
    {
      id: 3,
      description: 'Milk',
      amount: 32,
      category: 'Grocery',
    },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
