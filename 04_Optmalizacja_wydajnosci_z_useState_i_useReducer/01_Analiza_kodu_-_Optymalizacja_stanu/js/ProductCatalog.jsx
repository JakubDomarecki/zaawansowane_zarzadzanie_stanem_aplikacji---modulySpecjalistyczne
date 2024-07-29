import React, { useState, useEffect, useMemo, useReducer, useCallback } from 'react';

const simulateFetchProducts = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve(
          new Array(250).fill(0).map((_, index) => ({
            id: index + 1,
            name: `Product ${index + 1}`,
            price: (Math.random() * 100).toFixed(2),
            category: ['Electronics', 'Books', 'Clothing'][Math.floor(Math.random() * 3)],
          }))
        ),
      1000
    )
  );

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  
    return debouncedValue;
  };


  const productReducer = (state, action) => {

    switch(action.type) {
      case "SET_PRODUCTS":
        return{
          ...state,
          products: action.payload,
        }
        case "SET_FILTER":
          return{
            ...state,
            filter: action.payload
          }
          case "SET_SORT_ORDER":
            return{
              ...state,
              sortOrder: action.payload
            }  
          default:
            return new Error();
    }
  }



export const ProductCatalog = () => {

  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    filter: '',
    sortOrder: 'asc',
  })

  const debouncedFilter = useDebounce(state.filter, 300)


  useEffect(() => {
    simulateFetchProducts().then((data) => {
      dispatch({ type: 'SET_PRODUCTS', payload: data });
    });
  }, []);

  const handleFilterChange = useCallback((e) => {
    dispatch({type: 'SET_FILTER', payload: e.target.value })
  }, [])

  const handleSortOrderChange = useCallback((e) => {
    dispatch({ type: 'SET_SORT_ORDER', payload: e.target.value });
  }, []);


  const filteredAndSortedProducts = useMemo(() => {
    const filteredProducts = state.products.filter((product) =>
      product.category.toLowerCase().includes(debouncedFilter.toLowerCase())
    );
    return filteredProducts.sort((a, b) => {
      return state.sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }, [state.products, debouncedFilter, state.sortOrder]);

  return (
    <div>
      <input type="text" value={state.filter} onChange={handleFilterChange} placeholder="Filter by category..." />
      <select value={state.sortOrder} onChange={handleSortOrderChange}>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
      {filteredAndSortedProducts.map((product) => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 4,
            padding: 8,
            gap: 5,
            borderBottom: '1px solid black',
          }}
        >
          {product.name}
          <span>${product.price}</span>
          <span>{product.category}</span>
        </div>
      ))}
    </div>
  );
};
