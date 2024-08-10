import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useCustomFormProvider } from "./FormContext";

const schema = z.object({
  street: z.string().min(1),
  houseNumber: z.string().min(1),
  city: z.string().min(1),
  postalCode: z.string().min(1),
});

export const StepTwo = () => {
  const { handleAddData, data } = useCustomFormProvider();
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: data,
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    handleAddData(data);
    navigate('/confirmation');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('street')} placeholder="Ulica" />
      <input {...register('houseNumber')} placeholder="Numer domu/mieszkania" />
      <input {...register('city')} placeholder="Miasto" />
      <input {...register('postalCode')} placeholder="Kod pocztowy" />
      <button type="button" onClick={() => navigate('/')}>
        Wstecz
      </button>
      <button type="submit">Dalej</button>
    </form>
  );
};