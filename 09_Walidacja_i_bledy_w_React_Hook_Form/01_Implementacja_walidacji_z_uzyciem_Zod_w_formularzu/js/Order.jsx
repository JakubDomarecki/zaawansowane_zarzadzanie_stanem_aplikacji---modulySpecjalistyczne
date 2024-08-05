import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


const schema = z.object({
  fullName: z.string().min(1, 'Imię i nazwisko jest wymagane'),
  email: z.string().email(`niepoprawny format email`),
  address: z.string().min(10, 'Niepoprawny adres'),
  postalCode: z.string().regex(/^\d{2}-\d{3}$/, 'Niepoprawny kod pocztowy'),
  quantity: z.string().regex(/^\d+$/, 'Minimalna ilość to 1').transform(val => parseInt(val, 10)).refine(val => val >= 1, 'Minimalna ilość to 1')
}).required()


export const Order = () => {

const {register, handleSubmit, formState: {errors}} = useForm({
  resolver: zodResolver(schema)
});

const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Order Form</h2>

      <div>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" {...register('fullName')}/>
      </div>

      {errors?.fullName && (<div>{errors.fullName.message}</div>)}

      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email"  {...register('email')} />
      </div>

      {errors?.email && (<div>{errors.email.message}</div>)}

      <div>
        <label htmlFor="address">Delivery Address</label>
        <input type="text" id="address"  {...register('address')}/>
      </div>

      {errors?.address && (<div>{errors.address.message}</div>)}

      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" {...register('postalCode')}/>
      </div>

      {errors?.postalCode && (<div>{errors.postalCode.message}</div>)}

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" {...register('quantity')}/>  
      </div>

      {errors?.quantity && (<div>{errors.quantity.message}</div>)}

      <button type="submit">Submit Order</button>
    </form>
  );
};
