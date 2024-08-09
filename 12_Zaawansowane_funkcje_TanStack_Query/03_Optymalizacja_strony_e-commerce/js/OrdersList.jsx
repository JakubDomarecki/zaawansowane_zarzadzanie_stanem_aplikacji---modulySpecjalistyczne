import { Typography, Card, CardContent, List, ListItem, ListItemText, Button } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const OrdersList = () => {
  const { data } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3001/orders');
      return response.json();
    },
    refetchInterval: 5000,
  });
  const queryClient = useQueryClient();

  const deleteOrder = useMutation({
    mutationFn: (id) => {
      return fetch(`http://localhost:3001/orders/${id}`, {
        method: 'DELETE',
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries('orders');
    },
  });

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
              {order.products.map((product) => (
                <ListItem key={product.id}>
                  <ListItemText primary={product.name} secondary={product.price} />
                </ListItem>
              ))}
            </List>
            <Button onClick={() => deleteOrder.mutate(order.id)} variant="contained" color="error">
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
