import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchPosts = async (page = 1, perPage = 10) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_per_page=${perPage}`);

  if (response.ok) {
    return response.json();
  } else {
    return null;
  }
};

export const PostsList = () => {
  const [page, setPage] = useState(1);

  const {data: posts, isPending, isError} = useQuery({
    queryKey: ['posts', page],
    queryFn: () => fetchPosts(page),
  })

  const handleNextPage = () => {
    setPage(prev => prev + 1)
  }

  const handlePrevPage = () => {
    setPage(prev => Math.max(prev - 1, 1))
  }

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      <button onClick={handlePrevPage}>Poprzednia strona</button>
      <button onClick={handleNextPage}>Następna strona</button>
    </div>
  );
};
