
import { useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { 
        ...state, 
        [action.payload.name]: action.payload.value };
    case 'RESET_FORM':
      return action.payload
    default:
      throw new Error('Unknown action');
  }
};

export const useForm = (initialValues) => {
  const [formData, dispatch] = useReducer(formReducer, initialValues);

  const handleChange = (name, value) => {
    dispatch({ type: 'UPDATE_FIELD', payload: { name, value } });
  };

  // Zaimplementuj funkcję handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const resetForm = () => {
    dispatch({type: 'RESET_FORM', payload: initialValues })
  };

  return { formData, handleChange, resetForm, handleSubmit };
};
