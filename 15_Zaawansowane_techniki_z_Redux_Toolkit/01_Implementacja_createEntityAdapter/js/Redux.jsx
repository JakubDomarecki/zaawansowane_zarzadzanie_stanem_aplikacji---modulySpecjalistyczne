import { configureStore, createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

const productsAdapter = createEntityAdapter({
  productId: (product) => product.Id,
})

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState(),
  reducers: {
    productAdded: productsAdapter.addOne,
    productRemoved: productsAdapter.removeOne,
    productUpdated: productsAdapter.updateOne,
  },
});

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export const { productAdded, productRemoved, productUpdated } = productsSlice.actions;

export default store;
