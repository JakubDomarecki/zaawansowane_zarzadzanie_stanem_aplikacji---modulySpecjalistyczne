import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useCartContext } from './CartContext';

const fetchProducts = async () => {
  try{
    const resp = await fetch('http://localhost:3001/products')
    if (!resp.ok) {
      throw new Error;
    }
    return resp.json();
  }
  catch (err) {
    throw new Error;
  }

}


export const ProductsList = () => {

  const {data} = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })


  const {addToCart} = useCartContext();

  return (
    <div>
      <Typography variant="h5">Products List</Typography>
      <List>
        {data?.map((product) => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={`${product.description} - $${product.price}`} />
            <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
              Add to cart
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
