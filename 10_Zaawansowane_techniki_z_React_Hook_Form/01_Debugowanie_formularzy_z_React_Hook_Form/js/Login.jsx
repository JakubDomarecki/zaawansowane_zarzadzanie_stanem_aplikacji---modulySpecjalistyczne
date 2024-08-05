import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email('Nie poprawny email'),
  userName: z.string().min(1, 'Pole wymagane')  
})

export const Login = () => {
  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="userName"
        {...register('userName')}
        error={!!errors?.userName}
        helperText={errors?.userName?.message}
      />
      <TextField
        label="Email"
        {...register('email')}
        error={!!errors?.email}
        helperText={errors?.email?.message}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
