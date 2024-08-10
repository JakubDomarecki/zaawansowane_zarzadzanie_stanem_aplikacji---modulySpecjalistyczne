import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const fetchComments = async (postId) => {
    const response = await fetch(
      `http://localhost:3001/comments?postId=${postId}`
    );
    if (!response.ok) throw new Error('Problem z pobraniem komentarzy');
    return response.json();
  };

const postComment = async (data) => {
    const response = await fetch('http://localhost:3001/comments', {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!response.ok) throw new Error('Nie udało się dodać komentarza');
  return response.json();
}

const Comments = ({postId}) => {
    const {register, handleSubmit, reset} = useForm();

    const {data: comments, isPending, error, } = useQuery({
        queryKey: ['comments', postId],
        queryFn: () => fetchComments(postId),
    })

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: postComment,
        mutationKey: ['comments', postId],
        onSuccess: () => {
            queryClient.invalidateQueries(['comments', postId])
        }
    })

    const onSubmit = (data) => {
        mutation.mutate({...data, postId});
        reset()
    }

    if (isPending) return <div>Loading comments...</div>;
    if (error) return <div>Error: {error.message}</div>;




    return(
    <>
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.body}</li>
                ))}
            </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register('body', {required: true})} placeholder="Dodaj komentarz"/>
            <button type="submit">Wyślij</button>
        </form>
    </>
    )


}
export default Comments;