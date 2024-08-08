import { Button, List, ListItem, ListItemText, Typography, Alert } from '@mui/material';
import { useCartContext } from './CartContext';

export const CartList = () => {

  const {cart, removeFromCart} = useCartContext();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0)

  return (
    <div>
      <Typography variant="h5">Cart List</Typography>
      <List>
        {cart?.map((product) => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={`$${product.price}`} />
            <Button variant="contained" color="error" onClick={() => removeFromCart(product.id)}>
              Remove from cart
            </Button>
          </ListItem>
        ))}
      </List>
      <Alert icon={false} severity="success">
        Total price: {totalPrice.toFixed(2)}
      </Alert>
    </div>
  );
};
