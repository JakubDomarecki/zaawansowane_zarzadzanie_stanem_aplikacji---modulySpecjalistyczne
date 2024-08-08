import { Typography, Card, CardContent, List, ListItem, ListItemText, Button } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fetchOrders = async () => {
  try{
    const resp = await fetch('http://localhost:3001/orders')
    if (!resp.ok) {
      throw new Error
    }
    return resp.json();
  }
  catch (err) {
    throw new Error(err)
  } 
}

const DeleteOrder = async (id) => {
  try{
    const resp = await fetch(`http://localhost:3001/orders/${id}`, {
      method: 'DELETE',
    })
    if (!resp.ok) {
      throw new Error('Failed to delete order');
    }
    return resp.json();
  }
  catch (err) {
    throw new Error(`Error deleting order: ${err.message}`);
  } 
}

export const OrdersList = () => {
  const queryClient = useQueryClient();


  const {data} = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
  })

  const mutation = useMutation({
    mutationFn: DeleteOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(['orders'])
    }
  })

  return (
    <div>
      <Typography variant="h5">Orders List</Typography>
      {data?.map((order) => (
        <Card key={order.id} elevation={0}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {order.firstName} {order.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {order.address}
            </Typography>
            <List>
              {order.products?.map((product) => (
                <ListItem key={product.id}>
                  <ListItemText primary={product.name} secondary={product.price} />
                </ListItem>
              ))}
            </List>
            <Button variant="contained" color="error" onClick={() => mutation.mutate(order.id)}>
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
