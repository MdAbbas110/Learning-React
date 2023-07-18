import { useForm } from 'react-hook-form';
import category from '../category';
import { FormEvent } from 'react';

const ExpenseForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(register);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          {...register('description', { required: true, minLength: 3 })}
          id='description'
          type='text'
          className='form-control'
        />
        {errors.name?.type === 'required' && (
          <p className='text-danger'>description is required</p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className='text-danger'>Amount is needed</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          {...register('amount', { required: true, minLength: 1 })}
          id='amount'
          type='number'
          className='form-control'
        />
        {errors.name?.type === 'required' && (
          <p className='text-danger'>Amount is Required</p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className='text-danger'>Mention the price</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select {...register('category')} id='category' className='form-select'>
          <option value=''>Select One</option>
          {category.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
};

export default ExpenseForm;
