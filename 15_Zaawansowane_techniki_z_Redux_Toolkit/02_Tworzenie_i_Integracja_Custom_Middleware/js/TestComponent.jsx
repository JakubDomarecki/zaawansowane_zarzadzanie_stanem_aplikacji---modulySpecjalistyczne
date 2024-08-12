import { useDispatch } from 'react-redux';
import { addProduct, addUser } from './Redux';

export const TestComponent = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Test component</h2>
      <button onClick={() => dispatch(addUser('User 123'))}>Test User Action</button>
      <button onClick={() => dispatch(addProduct('Product 123'))}>Test Product Action</button>
    </>
  );
};
