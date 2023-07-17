import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';

export const Category = ['Groceries', 'Utilities', 'Entertainment'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Milk',
      amount: 43,
      category: 'Utilities',
    },
    {
      id: 2,
      description: 'Milk',
      amount: 14,
      category: 'Entertainment',
    },
    {
      id: 3,
      description: 'Utilities',
      amount: 32,
      category: 'Groceries',
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className='mb-5'>
        <ExpenseForm />
      </div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategories={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
