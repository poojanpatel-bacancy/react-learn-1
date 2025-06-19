import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  password: string;
}

function ReactHookFormExample() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>React Hook Form Example</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ marginBottom: 16 }}>
          <label>Name:</label><br />
          <input {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'At least 3 characters' } })} />
          {errors.name && <div style={{ color: 'red' }}>{errors.name.message}</div>}
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Email:</label><br />
          <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email address' } })} />
          {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Password:</label><br />
          <input type="password" {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'At least 6 characters' } })} />
          {errors.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReactHookFormExample; 