import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container, Grid, Paper, CssBaseline } from '@mui/material';
import { ProductsList } from './ProductsList';
import { CartList } from './CartList';
import { OrderForm } from './OrderForm';
import { CartProvider } from './CartContext';
import { OrdersList } from './OrdersList';
import { createRoot } from 'react-dom/client';

const queryClient = new QueryClient();

export const App = () => (
  <CartProvider>
    <QueryClientProvider client={queryClient}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <ProductsList />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <CartList />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <OrderForm />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <OrdersList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </QueryClientProvider>
  </CartProvider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
