import { useQueryClient , useMutation, useQuery} from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const fetchPosts = async () => {
  try {
    const response = await fetch('http://localhost:3001/posts')
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
  catch (err) {
    throw new Error ('fetch error' + err.message);
  }
}

const addPost = async (newPost) => {
  try {
    const response = await fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (err) {
    throw new Error('Add post error: ' + err.message);
  }
}

const deletePost = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (err) {
    throw new Error('Delete error: ' + err.message);
  }
}

export const PostsList = () => {
  const {data, error, isPending, isError} = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  const {register, handleSubmit, reset} = useForm()


  const queryClient = useQueryClient();

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  })

  const AddMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
      reset()
    },
  })

  const onSubmit = (formData) => {
    AddMutation.mutate(formData);  
  }


  if (isPending) {
    return <div>loading...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  if (data) {
    return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Title" {...register('title', {required: true})} />
        <textarea placeholder="Body"  {...register('body', {required: true})}/>
        <button type="submit">Add Post</button>
      </form>

      <div>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <button onClick={() => deletePostMutation.mutate(item.id)}>DELETE</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
};
