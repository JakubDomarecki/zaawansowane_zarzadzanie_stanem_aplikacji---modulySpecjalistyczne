import { useMutation } from "@tanstack/react-query";
import { useCustomFormProvider } from "./FormContext";
import { useNavigate } from "react-router-dom";

const sendFormData = async (formData) => {
  const response = await fetch('http://localhost:3001/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }

  return response.json();
};

export const StepThree = () => {
  const navigate = useNavigate();
  const mutation = useMutation({ mutationFn: sendFormData });
  const { clearData, data } = useCustomFormProvider();

  const handleSubmit = () => {
    mutation.mutate(data, {
      onSuccess: () => {
        clearData();
        alert('Form submitted successfully');
        navigate('/');
      },
    });
  };

  if (mutation.isLoading) return <div>Submitting...</div>;
  if (mutation.isError) return <div>Error: {mutation.error.message}</div>;

  return (
    <div>
      <h2>Podsumowanie</h2>
      <div>
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
      <button type="button" onClick={() => navigate('/address')}>
        Wstecz
      </button>
      <button onClick={handleSubmit}>Wyślij</button>
    </div>
  );
};