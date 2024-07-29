import { useReducer, useMemo , useCallback } from "react";


const initialState = {
  comments: [],
  newComment: '',
  filter: '',
}

const commentReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEW_COMMENT':
      return{
        ...state,
        newComment: action.payload
      }
    case 'ADD_COMMENT': 
    return{
      ...state,
      comments: [...state.comments, {id: state.comments.length + 1, text: state.newComment}],
      newComment: '',
    }
    case 'SET_FILTER':
      return{
        ...state,
        filter:  action.payload
      }
      default:
        throw new Error()
  }
}


export const CommentForm = () => {

  const [state, dispatch] = useReducer(commentReducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleAddComment = useCallback(() => {
    dispatch({ type: 'ADD_COMMENT' });
  }, [state.newComment]);
 
  const filteredComments =  useMemo(() => {
    return state.comments.filter(comment => comment.text.toLowerCase().includes(state.filter.toLowerCase()))
  }, [state.filter, state.comments]);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.newComment} onChange={e => dispatch({type: 'SET_NEW_COMMENT', payload: e.target.value})}></input>
        <button onClick={handleAddComment}>Add</button>
        <input value={state.filter} onChange={(e) => dispatch({type: 'SET_FILTER', payload: e.target.value})} placeholder="Filter comments" />
      </form>

      <ul>
        {filteredComments.map((comment,i) => (
          <li key={i}>{comment.text}</li>
        ))}
      </ul>
      

    </>
  );
};
