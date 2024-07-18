import { useForm } from './hooks/use-form';

export const Form = () => {
  const { formData, handleChange, resetForm, handleSubmit} = useForm({ name: '', email: '' });

  // Dodaj do form event `onSubmit` z odpowiednią metodą
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
      <button type="reset" onClick={resetForm}>Reset</button>
    </form>
  );
};