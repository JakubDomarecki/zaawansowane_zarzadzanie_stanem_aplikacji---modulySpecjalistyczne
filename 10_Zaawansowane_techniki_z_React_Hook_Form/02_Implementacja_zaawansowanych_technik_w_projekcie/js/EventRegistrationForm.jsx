import React from 'react';

import { TextField, RadioGroup, FormControlLabel, Button, Radio, FormControl, FormLabel} from '@mui/material';
import { useForm, Controller} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
  firstName: z.string().min(1, 'Pole wymagane'),
  lastName: z.string().min(1, 'Pole wymagane'),
  email: z.string().email('Niepoprawny email'),
  participationPreference: z.enum(['online', 'inPerson']).optional(),
  DietaryPreferences: z.string().optional(),
})


export const EventRegistrationForm = () => {

  const {register, handleSubmit, watch,formState: {errors}, control} = useForm({
    resolver: zodResolver(schema)
  });

  const DietaryPreferencesWatch = watch('participationPreference')

  const onSubmit = (data) => console.log(data);
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="First name" {...register('firstName')} 
        error={!!errors?.firstName}
        helperText={errors?.firstName?.message}
      />
      <TextField label="Last name" {...register('lastName')}
        error={!!errors?.lastName}
        helperText={errors?.lastName?.message}
      />
      <TextField label="E-mail"{...register('email')}
        error={!!errors?.email}
        helperText={errors?.email?.message}
      />

<FormControl component="fieldset" margin="normal">
      <FormLabel component="legend">Participation Preference</FormLabel>
        <Controller
          name="participationPreference"
          control={control}
           defaultValue="online"
          render={({ field }) => (
            <RadioGroup {...field} row>
              <FormControlLabel value="online" control={<Radio />} label="Online" />
              <FormControlLabel value="inPerson" control={<Radio />} label="In Person" />
            </RadioGroup>
          )}
        />
      </FormControl>
      {DietaryPreferencesWatch === 'inPerson' && (<TextField label="Dietary preferences"  {...register('DietaryPreferences')}/>)}

      <Button type="submit">Register</Button>
    </form>
  );
};
