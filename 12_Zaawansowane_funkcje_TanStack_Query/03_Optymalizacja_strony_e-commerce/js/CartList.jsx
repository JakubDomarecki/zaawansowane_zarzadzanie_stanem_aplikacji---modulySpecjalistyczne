import { Button, List, ListItem, ListItemText, Typography, Alert } from '@mui/material';
import { useCartContext } from './CartContext';
import { memo, useMemo } from 'react';

const CartListItem = memo(({product, removeFromCart}) => (
  <ListItem>
  <ListItemText primary={product.name} secondary={`$${product.price}`} />
  <Button variant="contained" color="error" onClick={() => removeFromCart(product.id)}>
    Remove from cart
  </Button>
</ListItem>
))

CartListItem.displayName = 'CarlistItem'


export const CartList = () => {
  const { cart, removeFromCart } = useCartContext();

  const total = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.price, 0)
  }, [cart])

  return (
    <div>
      <Typography variant="h5">Cart List</Typography>
      <List>
        {cart.map((product) => (
         <CartListItem key={product.id} product={product} removeFromCart={removeFromCart} />
        ))}
      </List>
      <Alert icon={false} severity="success">
        Total price: ${total.toFixed(2)}
      </Alert>
    </div>
  );
};
