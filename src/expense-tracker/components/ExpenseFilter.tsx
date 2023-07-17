import { Category } from '../../App';

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
      {Category.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
