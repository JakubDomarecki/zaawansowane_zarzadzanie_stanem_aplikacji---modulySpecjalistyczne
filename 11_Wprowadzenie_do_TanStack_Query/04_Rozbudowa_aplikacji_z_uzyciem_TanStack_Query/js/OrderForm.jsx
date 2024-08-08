import { useForm } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const  PostOrder = async (data) => {
  try{
    const resp = await fetch('http://localhost:3001/orders',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    if (!resp.ok) {
      throw new Error('Failed to place order');
    }
    return resp.json();
  }
  catch (err) {
    throw new Error(err.message);
  }
}


export const OrderForm = () => {
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset } = useForm();


  const mutation = useMutation({
    mutationFn: PostOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(['orders']);
      reset();
    },
  })


  const onSubmit = (data) => {
    mutation.mutate(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5">Order form</Typography>
      <TextField margin="normal" fullWidth label="First Name" {...register('firstName', { required: true })} />
      <TextField margin="normal" fullWidth label="Last Name" {...register('lastName', { required: true })} />
      <TextField margin="normal" fullWidth label="Address" {...register('address', { required: true })} />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Place Order
      </Button>
    </form>
  );
};
