import { useState } from "react";
import Comments from "./Comments";

const Post = ({post}) => {

    const [showComments, setShowComments] = useState(false)

    return(
        <>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button onClick={() => setShowComments(!showComments)}>
            {showComments ? 'ukryj' : 'pokaż'}
        </button>
        {showComments && <Comments postId={post.id} />}
        </>
    )

}
export default Post;