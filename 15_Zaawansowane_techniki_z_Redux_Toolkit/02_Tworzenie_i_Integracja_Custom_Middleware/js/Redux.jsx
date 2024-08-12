import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit"
import { loggerMiddleware } from "./loggerMiddleware"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        status: 'idle'
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        } 
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        status: 'idle',
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        }
    }
})

const rootReducer = combineReducers({
    user: userSlice.reducer,
    product: productSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
})

export const {addUser} = userSlice.actions;
export const {addProduct} = productSlice.actions;