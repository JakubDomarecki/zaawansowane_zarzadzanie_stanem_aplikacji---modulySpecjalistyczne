import { useForm } from "react-hook-form";

export const SignUp = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input placeholder="Name" {...register('name')} />
      </div>

      <div>
        <label>Email</label>
        <input placeholder="Email" {...register('email')}/>
      </div>

      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" {...register('password')}/>
      </div>

      <div>
        <label>Biography</label>
        <textarea placeholder="Tell us about yourself..." {...register('biography')}/>
      </div>

      <div>
        <label>Job Role</label>
        <select {...register('Job Role')}>
          <option value="">Select...</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="product_manager">Product Manager</option>
        </select>
      </div>

      <div>
        Experience Level
        <label>
          <input type="radio" value="junior"  {...register('Experience Level')}/>
          Junior
        </label>
        <label>
          <input type="radio" value="mid" {...register('Experience Level')}/>
          Mid-level
        </label>
        <label>
          <input type="radio" value="senior" {...register('Experience Level')}/>
          Senior
        </label>
      </div>

      <button type="submit">Register</button>
    </form>
  );
};
