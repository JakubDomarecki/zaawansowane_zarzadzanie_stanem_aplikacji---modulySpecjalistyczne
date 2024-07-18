import { useReducer } from "react";

const initialState = {count: 0};

const countReducer = (state, action) => {
    switch(action.type) {
        case 'increment': 
            return {count: state.count + 1 }
        
        case 'decrement': 
            return {count: state.count - 1 }
        
        default: 
            throw new Error();  
    }
}


export const ThemeSelector = () => {

const [state, dispatch] = useReducer(countReducer, initialState);

const increment = () => {
    dispatch({type: 'increment'})
}

const decrement = () => {
    dispatch({type: 'decrement'})
}

return(
    <>
    <p>{state.count}</p>
    <div>
        <button onClick={increment}>inc</button>
        <button onClick={decrement}>dec</button>
        <div style={{width:`${30 + state.count}px`, height:`${30 + state.count}px`, background:'red', marginTop: '100px'}}/>
    </div>
    </>
);
}