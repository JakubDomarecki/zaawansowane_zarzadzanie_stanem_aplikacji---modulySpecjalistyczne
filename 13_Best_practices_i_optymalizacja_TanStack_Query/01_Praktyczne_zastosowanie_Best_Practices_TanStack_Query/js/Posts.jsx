import { useQuery } from "@tanstack/react-query";
import Post from "./Post";

const fetchPosts = async () => {
    const resp = await fetch('http://localhost:3001/posts');
    if (resp.ok) {
        return resp.json();
    }
    return null;
}

const Posts = () => {

    const { data, isPending, isError } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    if (isPending) {
        return <div>loading...</div>
    }

    if (isError) {
        return <div>ERROR</div>
    }

    return (
        <>
            <ul>
                {data?.map(item => (
                        <Post key={item.id} post={item}/>  
                ))}
            </ul>
        </>
    )
}
export default Posts;