import { useFieldArray, useForm } from "react-hook-form";

export const Recipe = () => {

  const {register, control, handleSubmit} = useForm();

  const {fields, remove, append} = useFieldArray({
    control,
    name: 'AdditionalIngredients',
  });

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add recipe</h2>
      <div>
        <label htmlFor="recipeName">Name</label>
        <input type="text" id="recipeName" name="recipeName" {...register('name')}/>
      </div>

      <div>
        <label htmlFor="servings">Servings</label>
        <input type="number" id="servings" name="servings" {...register('servings')} />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" {...register('description')}></textarea>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexDirection: 'column',
          marginBottom: '10px',
        }}
      >
        <input type="text" id="ingredientName-1" name="ingredientName-1" {...register('ingredient 1')}/>
        <input type="text" id="ingredientName-2" name="ingredientName-2" {...register('ingredient 2')} />
        <input type="text" id="ingredientName-3" name="ingredientName-3"  {...register('ingredient 3')}/>

        {fields.map((field,index) => (
          <div key={field.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input type="text" {...register(`AdditionalIngredients.${index}.name`)}   placeholder={`Additional Ingredient ${index + 1}`}></input>
            <button type="button" onClick={() => remove(index)}>Remove</button>
          </div>
        ))}
        
        <button type="button" onClick={() => append({name: ''})}>Add ingredient</button>
      </div>
      

      <button type="submit">Add</button>
    </form>
  );
};
