interface Props {
  onSelectCategories: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategories }: Props) => {
  return (
    <select
      className='form-select'
      onChange={(e) => onSelectCategories(e.target.value)}
    >
      <option value=''>All Categories</option>
      <option value='Groceries'>Groceries </option>
      <option value='Utilities'>Utilities</option>
      <option value='Entertainment'>Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
