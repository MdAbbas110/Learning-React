import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2),
  age: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>(resolver: zodResolver(schema));
  const onSubmit = (data: FeidlEvent) => console.log('hi');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='label-form'>
          Name
        </label>
        <input
          {...register('name', { required: true, minLength: 3 })}
          id='name'
          type='text'
          className='form-control'
        />
        {errors.name?.type === 'required' && (
          <p className='text-danger'>The name Field is required</p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className='text-danger'>The name has to be more then Three Char</p>
        )}
      </div>
      <div>
        <label htmlFor='age' className='label-form'>
          Age
        </label>
        <input
          {...register('age')}
          id='age'
          type='number'
          className='form-control'
        />
      </div>
      <button disabled={!isValid} className='btn btn-primary mt-2'>Submit</button>
    </form>
  );
};

export default Form;
