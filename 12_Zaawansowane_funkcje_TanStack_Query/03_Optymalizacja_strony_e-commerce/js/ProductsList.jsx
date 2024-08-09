import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useCartContext } from './CartContext';
import { useIntersection } from '@mantine/hooks';
import { useRef, useEffect, Fragment } from 'react';

const fetchProducts = async ({ pageParam }) => {
  const response = await fetch(`http://localhost:3001/products?_page=${pageParam}&_per_page=2`);

  if (response.ok) {
    return response.json();
  } else {
    return null;
  }
};

export const ProductsList = () => {
  const containerRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.next === null) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });
  const { addToCart } = useCartContext();

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage]);

  return (
    <div>
      <Typography variant="h5">Products List</Typography>
      <List ref={containerRef} sx={{ height: 100, overflowY: 'scroll' }}>
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group.data.map((product) => (
              <ListItem key={product.id}>
                <ListItemText primary={product.name} secondary={`${product.description} - $${product.price}`} />
                <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
                  Add to cart
                </Button>
              </ListItem>
            ))}
          </Fragment>
        ))}
        <div ref={ref} />
      </List>
    </div>
  );
};
