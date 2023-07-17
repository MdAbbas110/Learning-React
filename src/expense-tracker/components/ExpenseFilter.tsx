import category from '../category';

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
      {category.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
