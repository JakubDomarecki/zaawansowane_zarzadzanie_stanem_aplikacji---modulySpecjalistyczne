import { useQuery } from "@tanstack/react-query";


const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
  .then(resp => {
    if (!resp.ok) {
      throw new Error('Network response was not ok');
    }
    return resp.json()
  })
  .catch(err => {
    throw new Error ('fetch error' + err.message);
  })
}

// const fetchPosts2 = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//      if (!response.ok) {
//        throw new Error('Network response was not ok');
//      }
//       return response.json()
//      }
//   catch (err) {
//       throw new Error ('fetch error' + err.message);
//     }
// }


export const PostsList = () => {

  const {isPendind, isError, error, data} = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })


    if (isPendind) {
      return <div>loading...</div>
    }

    if (isError) {
      return <div>{error.message}</div>
    }

    if (data) {
      return (
        <div>
          <h1>posts</h1>
          <ul>
            {data.map(post => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )
    }



};
