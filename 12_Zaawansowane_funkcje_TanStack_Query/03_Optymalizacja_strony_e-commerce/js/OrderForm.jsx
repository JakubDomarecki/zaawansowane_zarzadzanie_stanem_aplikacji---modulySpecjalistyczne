import { useForm } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCartContext } from './CartContext';
import { useCallback } from 'react';

export const OrderForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { cart, clearCart } = useCartContext();
  const queryClient = useQueryClient();

  const placeOrderMutation = useMutation({
    mutationFn: (order) => {
      return fetch('http://localhost:3001/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...order,
          products: cart,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries('orders');
      clearCart();
      reset();
    },
  });

  const onSubmit = (data) => {
    placeOrderMutation.mutate(data);
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
