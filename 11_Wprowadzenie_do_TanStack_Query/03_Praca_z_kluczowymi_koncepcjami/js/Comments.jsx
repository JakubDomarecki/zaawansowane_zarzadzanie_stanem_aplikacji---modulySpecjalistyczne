import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fetchComment = async () => {
  try{
    const resp = await fetch('http://localhost:3001/comments')
    if (!resp.ok) {
      throw new Error
    }
    return resp.json();
  }
  catch (err) {
    console.log(err);
  }
}


export const Comments = () => {

  const queryClient = useQueryClient();

  const { data,  refetch, isLoading, isError, error, isFetching, isSuccess} = useQuery({
    queryKey: ['comments'],
    queryFn: fetchComment,
    staleTime: 300000,
    refetchOnWindowFocus: true,
  })



  const addComment = useMutation({
    mutationFn: () => {
      return fetch('http://localhost:3001/comments', {
        method: 'POST',
        body: JSON.stringify({
          author: `User ${Math.random() * 10}`,
          content: `Comment ${Math.random()}`,
        }),
      }).then((res) => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments'])
    }
  });

  return (
    <div>
      <button onClick={addComment.mutate}>Add random comment</button>
      <button onClick={() => refetch()}>refetch</button>

      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
        {isSuccess && (
          <>
            <p>Data is {isFetching ? 'updating...' : 'current'}</p>
            <ul>
              {data?.map(item => (
                <li key={item.id}>
                  <h2>{item.author}</h2>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
