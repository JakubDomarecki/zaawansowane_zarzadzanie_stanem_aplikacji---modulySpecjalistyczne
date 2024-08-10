import { zodResolver } from "@hookform/resolvers/zod"
import { useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import { useCustomFormProvider } from "./FormContext";

const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
  });
  
  export const StepOne = () => {
    const { handleAddData, data } = useCustomFormProvider();
    const { register, handleSubmit } = useForm({
      defaultValues: data,
      resolver: zodResolver(schema),
    });
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
      handleAddData(data);
      navigate('/address');
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} placeholder="Imię" />
        <input {...register('lastName')} placeholder="Nazwisko" />
        <input {...register('email')} placeholder="Email" type="email" />
        <button type="submit">Dalej</button>
      </form>
    );
  };